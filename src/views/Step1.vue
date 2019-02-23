<template>
  <div class="form-wrapper">
    <el-form ref="form" :model="form" label-width="120px" :rules="rules" label-position="top">
      <el-form-item prop="storeType" label="Store Type">
        <el-select v-model="form.storeType" style="width: 100%">
          <el-option  v-for="store in stores"
                      :label="store"
                      :value="store"
                      :key="store">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="provideDetails" label="Provide details" v-if="form.storeType === 'Metro'">
        <el-input v-model="form.provideDetails"></el-input>
      </el-form-item>

      <el-form-item prop="userLookup" label="User lookup">
        <el-autocomplete
          style="width: 100%"
          v-model="form.userLookup"
          :fetch-suggestions="querySearch"
          @select="onSelect">
        </el-autocomplete>
      </el-form-item>

      <el-form-item prop="firstName" label="First Name">
        <el-input v-model="form.firstName"></el-input>
      </el-form-item>

      <el-form-item prop="lastName" label="Last Name">
        <el-input v-model="form.lastName"></el-input>
      </el-form-item>

      <el-form-item>
        <!-- <el-button type="primary" @click="back">Back</el-button> -->
        <el-button type="primary" @click="next">Next</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>



<script>
  export default {
    data() {
      return {
        form: {},
        users: [],
        rules: {
          storeType: [{ required: true }],
          provideDetails: [{ required: true }],
          userLookup: [{ required: true }],
          firstName: [{ required: true }],
          lastName: [{ required: true }],
        },
        stores:["Mall", "Metro", "Arcade", "Centre"]
      }
    },
    mounted() {
      this.form = JSON.parse(sessionStorage.getItem('form1')) || {}
      this.getUsers()

    },
    methods: {

      next() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            sessionStorage.setItem('form1', JSON.stringify(this.form))
            this.$router.push({
              path: '/step2',
            })
          } else {
            return false;
          }
        });

      },
      onSelect(item) {
        const arr = item.value.split(' ')
        this.form.firstName = arr[1]
        this.form.lastName = arr[2]
      },
      getUsers() {
        fetch('https://randomuser.me/api/?results=50&nat=au&exc=login').then(res => res.json()).then(res => {
          this.users = res.results.map(v => v.name.title + ' ' + v.name.first + ' ' + v.name.last)
        })
      },
      /* element ui build in function
      * @param QueryString: query inputed */
      querySearch(queryString, cb) {
        var users = this.users;
        var results = queryString ? users.filter(v => v.toLowerCase().includes(queryString.toLowerCase())) : users;
        cb(results.map(v => ({ value: v })));
      }
    }
  }
</script>
<style>

</style>

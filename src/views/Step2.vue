<template>
  <div class="form-wrapper">
    <el-form ref="form" :model="form" label-width="250px" :rules="rules" label-position="top">
      <el-form-item label="What is the users role?" prop="usersRole">
        <el-select v-model="form.usersRole" style="width: 100%">
          <el-option label="Dev" value="Dev"></el-option>
          <el-option label="Manager" value="Manager"></el-option>
          <el-option label="Student" value="Student"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="When did the user first join?" prop="firstJoin">
        <el-date-picker
          v-model="form.firstJoin"
          value-format="yyyy-MM-dd"
          style="width: 100%"
          type="date"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="Is the person located in Victoria?" prop="isInVictoria">
        <el-radio v-model="form.isInVictoria" label="Yes">Yes</el-radio>
        <el-radio v-model="form.isInVictoria" label="No">No</el-radio>
      </el-form-item>
      <el-form-item
        label="Where in Victoria"
        v-if="form.isInVictoria === 'Yes'"
        prop="whereInVictoria"
      >
        <el-input type="textarea" :rows="2" v-model="form.whereInVictoria"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="back">Back</el-button>
        <el-button type="primary" @click="submit">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {},
        rules: {
          usersRole: [{ required: false }],
          firstJoin: [{ required: true }],
          isInVictoria: [{ required: true }],
          whereInVictoria: [{ required: true }],
        }
      }
    },
    mounted() {
      this.form = JSON.parse(sessionStorage.getItem('form2')) || {}
    },
    methods: {
      back() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            sessionStorage.setItem('form2', JSON.stringify(this.form))
            this.$router.push({
              path: '/',
            })
          } else {
            return false;
          }
        });

      },
      submit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            const form1 = JSON.parse(sessionStorage.getItem('form1')) || {}
            const form2 = this.form
            fetch('http://webhook.site/b695f74a-09eb-46ee-ae3b-c97972e41564', {
              method: 'post',
              body: JSON.stringify({ ...form1, ...form2 }),
            })
          } else {
            return false;
          }
        });
      },g
    }
  }
</script>


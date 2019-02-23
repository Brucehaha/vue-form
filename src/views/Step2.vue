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
    },
    methods: {
      back() {
      },
      submit() {
      },
    }
  }
</script>


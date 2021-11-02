<template>
  <div class="add_dialog">
    <el-form :model = "form" label-width = "120px">
      <el-form-item label="资源类型：">
        <el-radio-group v-model="form.zylx">
          <el-radio-button label="物理设备"></el-radio-button>
          <el-radio-button label="云设备"></el-radio-button>
          <el-radio-button label="虚拟设备"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="资源名称：">
        <el-input v-model="form.zymc" placeholder="请输入资源名称"></el-input>
      </el-form-item>
      <el-form-item label="资源所属组：">
        <el-select v-model="form.zyssz" placeholder="济南办公区测试服务器">
          <el-option key="1" label="上海办公区" value="上海办公区"></el-option>
          <el-option key="2" label="北京税务局" value="北京税务局"></el-option>
          <el-option key="3" label="济南机房"   value="济南机房"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label = "资源ip：">
        <el-input v-model = "form.zyip" placeholder="请输入资源ip 格式如：127.0.0.1"></el-input>
      </el-form-item>
      <el-form-item label = "资源用户名：">
        <el-input v-model = "form.zyip" placeholder="请输入资源用户名"></el-input>
      </el-form-item>
      <el-form-item label = "资源用户名口令：">
        <el-input v-model = "form.zyyhkl" placeholder="请输入资源口令"></el-input>
      </el-form-item>
      <el-form-item label = "备注：">
        <el-input v-model = "form.beizhu"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    data(){
        return{
          form:{
            zylx: '',
            zyssz:'',
            zyip:'',
            zyyhkl:'',
            beizhu:'',
          }
        }
    },
    methods:{

    }
}
</script>

<style>

</style>
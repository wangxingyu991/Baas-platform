<style lang="less">
.resource_mange{
  .progress-steps{
    padding:20px 0px;
    padding-top:0px;
    .progress-name{
      padding:10px 0px;
      padding-top:0px;
    }
    .el-step__title{
      font-size:14px;
    }
  }
  .bt-wrap{
    text-align: center;
  }
  .round_wrap{
    background: #F00;
  }
}
</style>
<template>
  <div class="resource_mange">
    <div class="progress-steps">
      <div class="progress-name">检测进程：</div>
      <el-steps   :active = "active" finish-status="success">
        <el-step title='网络检查'></el-step>
        <el-step title='硬件检测' ></el-step>
        <el-step title='软件检测'></el-step>
        <el-step title='fabric检测' style="width:120px;"></el-step>
      </el-steps>
    </div>
    <div class="bt-wrap">
      <el-button type="primary">开始校验</el-button>
    </div>
    <div class="table-wrap1">
      <el-table
        :data="tableData"
        height="400"
        @selection-change="handleSelectionChange"
        border
        style="width: 100%">
        <el-table-column 
        type="selection" 
        align="center">
        </el-table-column>
        <el-table-column
        prop="td_jcxm"
        label="检测项目"
        align="center"
        header-align="center"
        >
        </el-table-column>

        <el-table-column
        prop="td_jcjg"
        label="检测状态结果"
        align="center"
        header-align="center"
        >
        </el-table-column>

        <el-table-column
        prop="td_sbyy"
        label="失败原因"
        align="center"
        header-align="center"
        >
        </el-table-column> 
        <el-table-column
        label="操作">
              <template solt-scope="scope">
              <el-button type="text" size="mini">删除</el-button>
              <el-divider direction="vertical"></el-divider>
              <el-button type="text" size="mini">编辑</el-button>
              </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
      data(){
          return{
            active: '1',
            tableData:[{
              td_jcxm:'网络检测',
              td_jcjg:'检测完成',
              td_sbyy:'IP地址错误'
            }]
          }
      } 
}
</script>

<style>

</style>
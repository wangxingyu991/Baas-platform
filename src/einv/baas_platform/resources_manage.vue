<style lang="less">

</style>
<template>
  <div class="zygl">
    <!--资源管理-->
    <div class="rh-page-header">
          <div class="rh-head-and-operate">
                <div class="tips-content">
                      <span class="rh-helpTip-text">
                          资源管理
                      </span>
                      <span class="rh-helpTip-icon">
                            <el-tooltip class="item" content="云数据库GaussDB(for MySQL)是华为自研的最新一代企业级高扩展海量存储分布式数据库，完全兼容MySQL">
                                  <i class="el-icon-info"></i>
                            </el-tooltip>
                      </span>
                </div>
                <div class="operate-btns">
                  <div class="showtip rh-button">
                    <i class="bt-icon el-icon-document"></i>
                    <span class="bt-name">使用指南</span>
                  </div>
                </div>
          </div>
    </div>
    <transition name = "fade">
      <div class="rh-page-row" v-show="searchWrap">
        <div class="rh-row">
          <el-form :model="form" label-width="80px" >
            <el-row :gutter="20">
              <el-col :span="5">
                <el-form-item label="资源ip：">
                  <el-input v-model="form.zyip"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="资源名称：">
                  <el-input v-model="form.zymc"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="资源状态：">
                    <el-select v-model="form.zyzt" placeholder="请选择活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="5">
                <el-form-item label="资源所属组：">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-button type="primary" icon="el-icon-search"></el-button>
                <el-button type="primary">重置</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </transition>
    <div class="rh-page-content">
      <div class="rh-operate clearfix">
        <div class="rh-pull-left">
          <el-button type="primary" @click="Dialog=true">新增</el-button>
          <el-button type="primary">修改</el-button>
          <el-button type="danger" icon="el-icon-delete">删除</el-button>
            <el-dropdown  trigger="click">
                  <el-button type="primary">
                        更多 <i class="el-icon-arrow-down"></i>
                  </el-button>
                  <el-dropdown-menu slot="dropdown" >
                        <el-dropdown-item><i class="el-icon-download"></i> 导出</el-dropdown-item>
                        <el-dropdown-item><i class="el-icon-tickets"></i> 查看明细</el-dropdown-item>
                        <el-dropdown-item @click.native="Dialog2 = true"><i class="el-icon-basketball"></i> 检验资源状态</el-dropdown-item>
                  </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="rh-pull-right">
          <el-input
            placeholder="资源名称"
            style="width:200px"
            v-model="input4">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-dropdown :hide-on-click="false">
          <el-button icon="el-icon-finished"></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-checkbox-group v-model="checkList" @change="theadCheck" :min="1">
                <el-dropdown-item v-for="(item,index) in arry" :key="index" ><el-checkbox :label="item.lable" :checked='item.ischecked'></el-checkbox></el-dropdown-item>
              </el-checkbox-group>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button :icon="searchWrap?'el-icon-arrow-down':'el-icon-arrow-up'" @click="searchWrap = !searchWrap"></el-button>
          <el-button icon="el-icon-refresh"></el-button>
        </div>
      </div>
      <div class="rh-table">
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
            
              <el-table-column v-for="(item,index) in theadList"
                :key="index"
                :prop=item.prop
                header-align="center"
                show-overflow-tooltip
                align="center" 
                :label=item.lable
                >
              </el-table-column>
              <el-table-column
              width="180"
              label="操作">
                <template solt-scope="scope">
                  <el-button type="primary" size="mini">编辑</el-button>
                  <el-button type="danger" size="mini">删除</el-button>
                </template>
              </el-table-column>
        </el-table>
      </div>
      <div class="rh-pagination">
          <el-pagination
          layout="total, sizes, prev, pager, next"
          @current-change="pageChang"
          @size-change="handleSizeChange"
          :total="total"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="100"
          >
          </el-pagination>
      </div>
      <el-dialog 
      title="新增资源信息"
      :visible.sync = "Dialog"
      width="50%"
      append-to-body
      :close-on-click-modal='false'
      :before-close="handleClose">
      <add-resources></add-resources>
      </el-dialog>

      <el-dialog 
      title="检测资源状态"
       
      :visible.sync = "Dialog2"
      width="50%"
      append-to-body
      :close-on-click-modal='false'
      :before-close="handleClose2">
        <check-resources></check-resources>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import addResources from "./resources/add_resources.vue"
import checkResources from "./resources/check_resources.vue"
export default {
  data(){
      return{
        form: {
          zyip:'',
          zymc:'',
          zyzt:'',
          zyssz:'',
        },
        input4:'',
        searchWrap:false,
        checkList:[],
        //全部table头部菜单
        arry:[{
          prop: 'td_zymc',
          lable: '资源名称',
          ischecked:true,
        },{
          prop: 'td_zyssz',
          lable: '资源所属组',
          ischecked:false,
        },{
          prop: 'td_zyip',
          lable: '资源ip',
          ischecked:true,
        },{
          prop:'td_bz',
          lable:'备注',
          ischecked:true,
        }],
        //筛选后的列数组
        theadList:[],
        total:100,
        pageSizes:'10',
        pageSize:'9',
        //全部内容区
        tableData: [{
          td_zymc: '2016-05-03',
          td_zyssz: '王小虎',
          td_zyip: '上海市普陀区金沙江路 1518 弄',
          td_bz:'22222222222'
        },{
          td_zymc: '2016-05-02',
          td_zyssz: '王小虎',
          td_zyip: '上海市普陀区金沙江路 1518 弄',
          td_bz:'3333333333'
        }, {
          td_zymc: '2016-05-04',
          td_zyssz: '王小虎',
          td_zyip: '上海市普陀区金沙江路 1518 弄',
          td_bz:'2224444'
        },{
          td_zymc: '2016-05-01',
          td_zyssz: '王小虎',
          td_zyip: '上海市普陀区金沙江路 1518 弄',
           td_bz:'2224444'
        },{
          td_zymc: '2016-05-08',
          td_zyssz: '王小虎',
          td_zyip: '上海市普陀区金沙江路 1518 弄',
           td_bz:'2224444'
        },{
          td_zymc: '2016-05-06',
          td_zyssz: '王小虎',
          td_zyip: '上海市普陀区金沙江路 1518 弄',
           td_bz:'2224444'
        },{
          td_zymc: '2016-05-07',
          td_zyssz: '王小虎',
          td_zyip: '上海市普陀区金沙江路 1518 弄',
           td_bz:'2224444'
        }],
        //弹出层
        Dialog:false,
        Dialog2:false,
      }
  },
  components:{
    addResources,
    checkResources
  },
  created(){
    this.theadList = this.arry;
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val){
    },
    theadCheck(value){
      var arry1 = this.arry;
      this.theadList = this.checkChoose(arry1,value);
    },
    checkChoose(arry,value){
      let newArry = [];
      for(var i=0;i<value.length;i++){
        for(var j=0;j<arry.length;j++){
          if(value[i]==arry[j].lable){
            // this.arry[j].ischecked = true;
            newArry.push(arry[j]);
          }
        }
      }
      
      return newArry;
    },
    pageChang(val){
    },
    handleClose(){
      this.Dialog = false;
    },
    handleClose2(){
      this.Dialog2 = false;
    }
  }
}
</script>

<style>

</style>
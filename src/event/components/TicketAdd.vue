<template>
  <div class="tickets">
    <h4 class="tit">创建门票 <span @click="add=true;dialog = true">+添加新票种</span></h4>
        <el-form :inline="true" :model="addTicketInfoForm" ref="addTicketInfoForm" class="demo-form-inline">
            <!-- 弹出框 -->
                <el-dialog
                    :close-on-click-modal="false"
                    :append-to-body="true"
                    :title="add?'添加新票种':'修改票种'"
                    :visible.sync="dialog"
                    :before-close="handleClose"
                >
                <el-form-item label="名称" prop="ticName">
                    <el-input v-model="addTicketInfoForm.ticName" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="种类" prop="ticType">
                    <el-input v-model="addTicketInfoForm.ticType" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="数量" prop="ticNum">
                    <el-input v-model="addTicketInfoForm.ticNum" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="价格" prop="ticPrice">
                    <el-input v-model="addTicketInfoForm.ticPrice" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="币种" prop="ticCurrency">
                    <el-input v-model="addTicketInfoForm.ticCurrency" placeholder=""></el-input>
                </el-form-item>
                <div class="dialog-footer" slot="footer">
                    <el-button type="primary" @click="dialog = false">取 消</el-button>
                    <el-button type="success" icon="el-icon-download" @click="saveInfo(addTicketInfoForm)">保存</el-button>
                </div>
            </el-dialog>
        </el-form>
        <!-- 表格 -->
        <el-table  :data="tableData"  :header-cell-style="{ 'background-color': '#D2D6DE','font-size':'14px','color':'#333','line-height':'16px'}">
            <el-table-column prop="ticName" label="名称" width="220"></el-table-column>
            <el-table-column prop="ticType" label="种类" width="100"></el-table-column>
            <el-table-column prop="ticNum" label="数量" width="100"></el-table-column>
            <el-table-column prop="ticPrice" label="价格" width="100"></el-table-column>
            <el-table-column prop="ticCurrency" label="币种"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope" >
                    <span class="edut-btn" @click="edit(scope.$index,scope.row)"  >编辑</span>
                    <span class="edut-btn">｜</span>
                    <span class="edut-btn" @click="del(scope.$index)">删除</span>
                </template>
            </el-table-column>
        </el-table>
  </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            labelPosition: 'top',
            // dialog表单数据
            addTicketInfoForm: {},
            // table的数据
            tableData: [],
            // 新增弹出框
            add: true,
            // 关掉对话框
            dialog: false,
        };
    },
    // 模板渲染成html前调用
    created() {
        this.getdata();
    },
    // 在模板渲染成html后调用
    methods: {
        // 新增弹出框
        handleClose(done) {
            done();
            this.addTicketInfoForm = {};
        },
        // 获取数据
        getdata() {
            // 定义的获取数据的方法
            this.tableData = JSON.parse(localStorage.getItem("form") || "[]");
        },
        // 新增弹出框
        // 保存数据
        saveInfo(addTicketInfoForm) {
        if (this.add == true) {
            if(
            this.addTicketInfoForm.ticName && 
            this.addTicketInfoForm.ticType &&
            this.addTicketInfoForm.ticNum &&
            this.addTicketInfoForm.ticPrice &&
            this.addTicketInfoForm.ticCurrency 
            ){
            this.tableData.push(addTicketInfoForm);
            console.log(this.tableData)
            localStorage.setItem("form", JSON.stringify(this.tableData));
            // 将value存储到key字段
            // JSON.stringify()的作用是将 JavaScript 对象转换为 JSON 字符串
            // 关掉对话框
            this.dialog = false;
            // 存储到表单中
            this.addTicketInfoForm = {};
            } else {
            alert("表单不能为空");
            }
        } else {
            // 接收修改的数据
            this.tableData[this._index] = this.addTicketInfoForm;
            localStorage.setItem("form", JSON.stringify(this.tableData));
            this.dialog = false;
            this.addTicketInfoForm = {};
            this.getdata();
        }
        },
        // 删除
        del(index) {
            if (confirm("确定删除吗?")) {
                this.tableData.splice(index, 1);
                localStorage.setItem("form", JSON.stringify(this.tableData));
            }
        },
        // 修改
        edit(id, row) {
            this.dialog = true;
            this.add = false;
            this._index = id;
            // Object.assign()拷贝的是属性值
            this.addTicketInfoForm = Object.assign({}, row);
        }
    }
};
</script>
<style lang="less">
        /deep/ .el-table th.is-leaf{
            color: #333;
        }   
        
    .tickets{
        width: 864px;
        margin: 0 auto;
        
        .tit{
            color: #323C47;
            font-size: 14px;
            margin-bottom: 10px;
            span{
                color: #027AFF;
                cursor: pointer;
            }
        }
        .edut-btn{
            font-size: 12px;
            color: #0576F7;
            cursor: pointer;
        }
    }
</style>
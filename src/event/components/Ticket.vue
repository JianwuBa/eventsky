<template>
    <div class="tickets">
        <h4 class="tit">创建门票 <span @click="add=true;dialog = true">+添加新票种</span></h4>
        <el-form :model="addTicketInfoForm" :rules="ticketRules" ref="addTicketInfoForm" >
            <!-- 弹出框 -->
                <el-dialog
                    :close-on-click-modal="false"
                    :append-to-body="true"
                    :title="add?'添加新票种':'修改票种'"
                    :visible.sync="dialog"
                >
                <el-form-item label="名称" prop="ticName">
                    <el-input v-model="addTicketInfoForm.ticName" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="种类" prop="ticType">
                    <el-select v-model="addTicketInfoForm.ticTypeVal" placeholder="请选择">
                        <el-option
                        v-for="item in addTicketInfoForm.ticType"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="数量" prop="ticNum">
                    <el-input v-model="addTicketInfoForm.ticNum" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="价格" prop="ticPrice">
                    <el-input v-model="addTicketInfoForm.ticPrice" placeholder=""></el-input>
                </el-form-item>
                <el-form-item label="币种" prop="ticCurrency">
                     <el-select v-model="addTicketInfoForm.ticCurrencyVal" placeholder="请选择">
                        <el-option
                        v-for="item in addTicketInfoForm.ticCurrency"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <div class="dialog-footer" slot="footer">
                    <el-button type="primary" @click="dialog = false">取 消</el-button>
                    <el-button type="success" @click="saveInfo('addTicketInfoForm')">保存</el-button>
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
            eventId:'',
            requestUrl:'/event-service',
            addTicketInfoForm:{
                ticName:'',
                ticTypeVal:'',
                ticType:[
                    {
                        value: 1,
                        label: '免费'
                    },
                    {
                        value: 2,
                        label: '收费'
                    },
                ],
                ticNum:'',
                ticPrice:'',
                ticCurrencyVal:'',
                ticCurrency:[
                    {
                        value: '美元',
                        label: '美元'
                    },
                    {
                        value: '人民币',
                        label: '人民币'
                    },
                ]
            },
            ticketRules:{
                ticName: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                ticType: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                ticNum: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                ticPrice: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                 ticCurrency: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
            },
            labelPosition: 'top',
            // dialog表单数据
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
        let webId = this.$route.params.pathMatch
        this.eventId = webId
    },
    methods: {
       
        // 保存数据
        saveInfo(addTicketInfoForm) {
            this.$refs[addTicketInfoForm].validate((valid) => {
                if (valid) {
                    this.$http.post(this.requestUrl+"/event_set/price/"+this.eventId+"?amount="+this.addTicketInfoForm.ticPrice+"&count="+this.addTicketInfoForm.ticNum+"&currency="+this.addTicketInfoForm.ticCurrencyVal+"&listOrder=1&id=1&title="+this.addTicketInfoForm.ticName+"&type="+this.addTicketInfoForm.ticTypeVal+"&webId="+this.eventId+"").then(res => {
                        if(res.data.rspCode == 1){
                            alert("添加成功")
                            this.tableData.push(addTicketInfoForm);
                            console.log(this.tableData)
                            this.dialog = false;

                        }
                        console.log(res)
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        // 删除
        del(index) {
            if (confirm("确定删除吗?")) {
                this.tableData.splice(index, 1);
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
    /deep/ .el-form-item{
        margin-bottom: 15px;
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

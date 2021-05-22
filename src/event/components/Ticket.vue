<template>
    <div class="tickets">
        <h4 class="tit">创建门票 <span @click="add=true;dialog = true;createTicBtn=true">+添加新票种</span></h4>
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
                <el-form-item label="ID" prop="ticID" v-if="showID">
                    <el-input v-model="addTicketInfoForm.ticID" placeholder=""></el-input>
                </el-form-item>
                <div class="dialog-footer" slot="footer">
                    <el-button type="primary" @click="dialog = false">取 消</el-button>
                    <el-button type="success" v-if="createTicBtn" @click="saveInfo('addTicketInfoForm')">保存</el-button>
                    <el-button type="success" v-if="!createTicBtn" @click="saveTicChange('addTicketInfoForm')">保存</el-button>
                </div>
            </el-dialog>
        </el-form>
        <!-- 表格 -->
        <el-table  :data="ticArray"  :header-cell-style="{ 'background-color': '#D2D6DE','font-size':'14px','color':'#333','line-height':'16px'}">
            <el-table-column prop="title" label="名称"> </el-table-column>
            <el-table-column prop="type" label="种类">
                <template slot-scope="scope">
                {{scope.row[scope.column.property] | filterType}}
                </template>
            </el-table-column>
            <el-table-column prop="count" label="数量"> </el-table-column>
            <el-table-column prop="amount" label="价格"> </el-table-column>
            <el-table-column prop="currency" label="币种"> </el-table-column>
            <el-table-column prop="id" label="ID" v-if="showID"> </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope" >
                    <span class="edut-btn" @click="editTic(scope.row,scope.row.id)">编辑</span>
                    <span class="edut-btn">｜</span>
                    <span class="edut-btn" @click="delTic(scope.row.id)">删除</span>
                </template>
            </el-table-column> 
        </el-table>
        <el-dialog
            title=""
            :visible.sync="delTICdialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>确定删除该票种吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delTICdialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="delTICdialog">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    // let ticForm = {
    //     //数据模子
    //     ticName:null,
    //     ticType:null,
    //     ticNum:null,
    //     ticPrice:null,
    //     ticCurrency:null
    // }
export default {
    name: "index",
    
    data() {
        return {
            createTicBtn:true,
            delTICdialogVisible:false,
            //门票ID
            showID:false,
            //门票列表
            ticArray:[],
            ticHead:[
                {
                    label: '名称',
                    key: 'title'
                },
                 {
                    label: '种类',
                    key: 'type '
                },
                 {
                    label: '数量',
                    key: 'count'
                },
                 {
                    label: '价格',
                    key: 'amount'
                },
                 {
                    label: '币种',
                    key: 'currency'
                },{
                    label: 'id',
                    key: 'id'
                },
            ],
            //ticFormData:JSON.parse(JSON.stringify(ticForm)),
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
                ],
                ticID:'',
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
        this.getTicForm()
    },
    filters:{
        filterType(val){
            return val = val == 1 ? "免费":"收费"
        }
    },
    methods: {
        //获取门票列表
        getTicForm(){
            this.$http.get(this.requestUrl+"/event_set/price_list/"+this.eventId).then(res =>{
               
                this.ticArray = res.data.data
                //console.log(this.ticArray)
            })
        },
        //门票form数据
        delTicFormData(){
            let obj = {
                amount:this.addTicketInfoForm.ticPrice,
                count:this.addTicketInfoForm.ticNum,
                currency:this.addTicketInfoForm.ticCurrencyVal,
                listOrder:1,
                title:this.addTicketInfoForm.ticName,
                type:this.addTicketInfoForm.ticTypeVal,
                webId:this.eventId,
                id:this.addTicketInfoForm.ticID
            }
            return obj
        },
        // 保存门票
        saveInfo(addTicketInfoForm) {
            this.$refs[addTicketInfoForm].validate((valid) => {
                if (valid) {
                    const formData = new FormData();
                    Object.keys(this.delTicFormData()).forEach((key) => {
                        formData.append(key, this.delTicFormData()[key]);
                    });
                    this.dialog = false;
                    this.$http.post(this.requestUrl+"/event_set/price/"+this.eventId,formData).then(res => {
                        if(res.data.rspCode == 400007){
                            this.$router.push('/login')
                        }
                        if(res.data.rspCode == 1){
                            this.dialog = false;
                            location.reload();
                            this.addTicketInfoForm = {};
                        }
                        console.log(res)
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        // 修改
        saveTicChange(addTicketInfoForm){
            this.$refs[addTicketInfoForm].validate((valid) => {
                if (valid) {
                    const formData = new FormData();
                    Object.keys(this.delTicFormData()).forEach((key) => {
                        formData.append(key, this.delTicFormData()[key]);
                    });
                    this.dialog = false;
                    this.$http.post(this.requestUrl+"/event_set/price/"+this.eventId,formData).then(res => {
                        if(res.data.rspCode == 400007){
                            this.$router.push('/login')
                        }
                        if(res.data.rspCode == 1){
                            this.dialog = false;
                            location.reload();
                        }
                        console.log(res)
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        editTic(row,id) {
            this.createTicBtn=false;
            this.dialog = true;
            this.addTicketInfoForm.ticID = id;
            console.log(this.ticID)
            this.addTicketInfoForm.ticName = row.title
            this.addTicketInfoForm.ticTypeVal = row.type
            this.addTicketInfoForm.ticNum = row.count
            this.addTicketInfoForm.ticPrice = row.amount
            this.addTicketInfoForm.ticCurrencyVal = row.currency
        },
        //删除票种
        delTic(id){
            this.$http.delete(this.requestUrl + "/event_set/price/"+this.eventId+"?priceId="+id).then(res =>{
                console.log(res)
                if(res.data.rspCode == 1){
                    this.delTICdialogVisible = true
                    
                }
            })
        },
        handleClose(){
            this.delTICdialogVisible = false;
        },
        delTICdialog(){
            this.delTICdialogVisible = true;
            location.reload();
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

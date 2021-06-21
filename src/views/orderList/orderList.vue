<template>
    <div class="container">
        <div class="search">
            <el-input  placeholder="姓名/手机/邮箱" class="search-input"></el-input>
            <el-button class="search-btn">查询</el-button>
        </div>
         <el-table
            :data="participantsData"
            style="width: 100%">
            <el-table-column
                prop="name"
                label="姓名"
                >
            </el-table-column>
            <el-table-column
                prop="orderNo"
                label="订单号"
                >
            </el-table-column>
            <el-table-column
                prop="goodsItemName"
                label="报名种类">
            </el-table-column>
            <el-table-column
                prop="paymentAmount"
                label="金额">
            </el-table-column>
            <el-table-column
                prop="platformServiceFee"
                label="手续费">
            </el-table-column>

            <el-table-column
                prop="totalAmount"
                label="净收入">
            </el-table-column>
            <el-table-column
                prop="ohers"
                label="时间">
            </el-table-column>
        </el-table>
        {{participantsList}}
        
    </div>
</template>

<script>
 import {getOrderLists} from '@/api/orderService.js'
    export default {
        props:["participantsList"],
        data(){
            return{
                participantsData:[]
            }
        },
        methods:{
             orderLists(){
                getOrderLists().then(res => {
                    // console.log(res)
                    if(res.data.rspCode == 1){
                        let data = res.data.data
                        let obj = new Object;
                        data.results.forEach(item => {
                            // console.log(item)
                            //订单号
                            obj.orderNo = item.orderNo
                            //报名种类
                            item.items.forEach(ticType => {
                                obj.goodsItemName = ticType.goodsItemName
                            })
                            //金额
                            obj.paymentAmount = item.paymentAmount
                            //手续费
                            if(item.platformServiceFee){
                                obj.platformServiceFee = item.platformServiceFee
                            }else{
                                obj.platformServiceFee = 0
                            }
                            //总收入
                            obj.totalAmount =(Number(item.totalAmount)  -  Number(item.paymentAmount))
                            //时间
                            obj.createDate = item.createDate
                            item.buyerInfos.forEach(items => {
                                //console.log(items)
                                if(items.titleKey == "name"){
                                    obj.name = items.content
                                }
                            })
                            this.participantsData.push(obj)
                        })
                        // console.log(this.participantsData)
                    }
                })
            }
        },
        created(){
            this.orderLists()
        }
    }
</script>

<style lang="less" scoped>
    .container{
        width: 90%;
        margin: 0 auto;
        padding-top: 20px;
        .search{
            width: 100%;
            padding: 12px;
            background: #FFFFFF;
            border-radius: 3px;
            border: 1px solid #E2E4EA;
            .search-input{
                width: 252px;
                /deep/ .el-input__inner{
                    height: 30px;
                    line-height: 30px;
                }
                
            }
            .search-btn{
                border-radius: 3px;
                border: 1px solid #597EF7;
                padding: 0 20px;
                line-height: 28px;
                margin-left: 10px;
                color: #597EF7;
            }
        }
    }
</style>
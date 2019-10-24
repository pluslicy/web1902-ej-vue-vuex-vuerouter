<template>
  <div class="product">
    <h2>产品管理</h2>
		<!-- 按钮 -->
		<div>
			<el-button @click="toAddHandler" size="small" type="primary">添加</el-button>
			<el-button @click="batchDeleteHandler"  size="small" type="danger">批量删除</el-button>
		</div>
		<!-- 表格 -->
		<div>
      <el-table :data="products" size="mini"  @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="编号"></el-table-column>
        <el-table-column prop="name" label="产品名称"></el-table-column>
        <el-table-column prop="price" label="价格"></el-table-column>
        <el-table-column prop="description" label="描述"></el-table-column>
        <el-table-column prop="categoryId" label="所属产品"></el-table-column>
        <el-table-column label="操作" width="60" align="center">
          <template #default="record">
              <i class="el-icon-delete" href="" @click.prevent="deleteHandler(record.row.id)"></i> &nbsp;
							<i class="el-icon-edit-outline" href="" @click.prevent="editHandler(record.row)"></i>
          </template>
        </el-table-column>
      </el-table>
		</div>
    <!-- 模态框 -->
    <el-dialog :title="title" :visible.sync="visible" @close="dialogCloseHandler">
      <el-form :model="product" :rules="rules" ref="productForm">
        <el-form-item label="名称" label-width="100px"  prop="name">
          <el-input v-model="product.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格" label-width="100px" prop="price">
          <el-input v-model="product.price" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属栏目" label-width="100px" prop="categoryId">
          <el-select v-model="product.categoryId">
            <el-option v-for="c in categories" :key="c.id" :label="c.name" :value="c.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="介绍" label-width="100px">
          <el-input type="textarea" v-model="product.description" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="closeModal">取 消</el-button>
        <el-button size="small" type="primary" @click="submitHandler">确 定</el-button>
      </div>
    </el-dialog>
    <!-- /模态框 -->
  </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  data(){
    return {
      product:{},
      ids:[],
      rules:{
        name: [
          { required: true, message: '请输入产品名称', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '请输入价格', trigger: 'blur' }
        ],
        categoryId:[
          { required: true, message: '请选择所属栏目', trigger: 'blur' }
        ]
      }
    }
  },
  computed:{
    ...mapState("product",["products","visible","title"]),
    ...mapState("category",["categories"]),
    ...mapGetters("product",["orderProduct","productSize"])
  },
  created(){
    // 查询所有产品
    this.findAllProducts();
    // 查询所有栏目
    this.findAllCategories();
  },
  methods:{
    ...mapMutations("product",["showModal","closeModal","setTitle"]),
    ...mapActions("product",["findAllProducts","saveOrUpdateProduct","deleteProductById","batchDeleteProduct"]),
    ...mapActions("category",["findAllCategories"]),
    // 普通方法
    handleSelectionChange(val) {
      this.ids = val.map(item=>item.id);
    },
    toAddHandler(){
      // 1. 重置表单
      this.product = {};
      this.setTitle("添加产品信息");
      // 2. 显示模态框
      this.showModal();
    },
    submitHandler(){
      // 校验
      this.$refs.productForm.validate((valid)=>{
        // 如果校验通过
        if(valid){
          let promise = this.saveOrUpdateProduct(this.product)
          promise.then((response)=>{
            // promise为action函数的返回值，异步函数的返回值就是promise的then回调函数的参数
            this.$message({type:"success",message:response.statusText});
          })
        } else {
          return false;
        }
      })
    },
    dialogCloseHandler(){
      this.$refs.productForm.resetFields();
    },
    editHandler(row){
      this.product = row;
      this.setTitle("修改产品信息");
      this.showModal();
    },
    deleteHandler(id){
      this.deleteProductById(id)
      .then((response)=>{
        this.$message({type:"success",message:response.statusText});
      })
    },
    batchDeleteHandler(){
      this.batchDeleteProduct(this.ids)
      .then((response)=>{
        this.$message({type:"success",message:response.statusText});
      })
    }

  }

}
</script>
<style scoped>

</style>
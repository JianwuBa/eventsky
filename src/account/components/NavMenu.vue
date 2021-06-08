<template>
    <fragment class="sidebar-item">
<!--    <div class="sidebar-item">-->
        <template v-for="(item) in menu">
            <!-- 最后一级菜单 -->
            
            <el-menu-item
                    v-if="!item.children"
                    :key="item.path"
                    :index="item.path"
                    
            >
                <i :class="item.icon"></i>
                <span slot="title">{{ item.title }}</span>
            </el-menu-item>

            <!-- 此菜单下还有子菜单 -->
            <el-submenu
                    v-if="item.children"
                    :key="item.path"
                    :index="item.path"
            >
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span> {{ item.title }}</span>
                </template>
                <!-- 递归 -->
                <sidebar-item
                        
                        :menu="item.children"
                        :parent="parent ? parent + '/' + item.path : item.path"
                />
            </el-submenu>
        </template>
<!--    </div>-->
    </fragment>
</template>

<script>
export default {
  name: "SidebarItem",
  props: ["menu", "parent"],
  data() {
    return {};
  },

};
</script>

<style></style>
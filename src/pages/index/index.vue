<template>
  <view class="content">

    <image
      class="logo"
      src="/static/logo.png"
    ></image>
    <view>插件页面</view>
    <view>
      <text class="title">{{num}}</text>
      <button @click="click">+</button>
    </view>
  </view>
</template>

<script>
import store from "../../store/index.js";
import {minusNum} from "@/main";
export default {
  data() {
    return {
      title: "Hello",
    };
  },
  computed: {
    num() {
      return store.state.numnumnum;
    },
  },
  onLoad() {},
  methods: {
    click() {
      store.commit("add");
      console.log('框架内调用')
      minusNum()
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>

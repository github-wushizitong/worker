// components/ziDingYiZuJian.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 接收父组件传递过来的数据
    list: {
      // 接收的数据类型
      type: Array,
      // 接收的数据的初始值
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    itemHandle(e) {
      // console.log('惦记我');
      console.log(e);
      // 获取事件源 的 data-index 属性
      let { index } = e.currentTarget.dataset;

      // 当前(子组件)向引用当前组件的父组件传递数据,并且触发父组件中的自定义事件
      this.triggerEvent('itemClick', { index });
    }
  }
});

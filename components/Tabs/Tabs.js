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
      // 最严谨的作风，重新拷贝一份数组，再对这个数组的备份进行处理，
      // let list = JSON.parse(JSON.stringify(this.data.list));
      // 获取 当前data 数据
      let { list } = this.data;
      // 循环数组，注意，会修改当前数组中的对象,也会导致源数组数据被修改
      list.forEach((listItem, listIndex) => {
        if (listIndex === index) {
          listItem.isActive = true;
        } else {
          listItem.isActive = false;
        }
      });
      this.setData({
        list: list
      });
    }
  }
});

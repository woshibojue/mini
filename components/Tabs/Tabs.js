// components/Tabs/Tabs.js
Component({
  /**
   * 里面存放的是 要从夫组件中接收的数据
   */
  properties: {
    //要接收的数据的名称
    // aaa: {
    //   //type 要接收的数据的类型
    //   type: String,
    //   //value 默认值
    //   value: "",
    // },
    tabs: {
      type: Array,
      value: [],
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    title_item_tap(e) {
      //console.log("佳儿");

      //console.log(e.currentTarget.dataset.indexss);
      // const{indexss}里面的indexss需要与自定义的data-indexss中的indexss一致
      const { indexss } = e.currentTarget.dataset;
      //触发父组件中的自定义事件，同时传递参数
      //this.triggerEvent("自定义事件", 传递的参数);
      this.triggerEvent("itemChange", { indexss });
      //console.log({ indexss });
      //console.log(this.data);
      //{tabs}需要与data中的tabs名字一致
      //let { tabs } = this.data;
      //最严谨的做法：对tabs进行深拷贝
      //let tabs = JSON.parse(JSON.stringify(this.data.tabs));
      // tabs.forEach((v, i) =>
      //   i === indexss
      //     ? (console.log(v), (v.isactive = true))
      //     : (v.isactive = false)
      // );
      // this.setData({
      //   tabs,
      // });
    },
  },
});

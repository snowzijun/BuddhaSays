export default defineAppConfig({
  pages: ["pages/index/index", "pages/scripture/index", "pages/my/index"],
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "images/home.png",
        selectedIconPath: "images/home_selected.png",
      },
      {
        pagePath: "pages/scripture/index",
        text: "抄经",
        iconPath: "images/scripture.png",
        selectedIconPath: "images/scripture_selected.png",
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
        iconPath: "images/my.png",
        selectedIconPath: "images/my_selected.png",
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});

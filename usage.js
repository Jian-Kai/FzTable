$('.frzTable.default').frzTable({
    count: {
        // M版時每次點擊往前往後移動幾格儲存格
        slide: 1, // [number] max = 4 min = 1
        // M版時一個畫面show幾格儲存格
        show: 4 // [number] max = 4
    },
    // 設定花多久時間移動完成
    speed: .3, // [number] 
    // 每次點擊儲存格時會執行此callback，並帶入所點擊的儲存格jquery物件
    whenClick: function($element) {
        // console.log($element)
    }
})

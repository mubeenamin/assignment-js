function storeInfo(manufacturer, name, ...keywords) {
    return {
      manufacturer,
      "model name": name,
      keywords,
    };
  }
  
  console.log(storeInfo("Honda", "2022"));
  
  console.log(
    storeInfo("Honda", "2022", { color: "black" }, { condition: "new" })
  );
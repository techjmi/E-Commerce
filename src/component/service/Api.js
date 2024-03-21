async function fetchData() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data);
      // Handle the data or perform other operations here
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  fetchData();
  
config = { _id: "abc", members:[
          { _id : 0, host : "KG:27001"}
          ]
}

rs.initiate(config);
rs.status();
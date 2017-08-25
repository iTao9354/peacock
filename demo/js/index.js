//用于生成菜单
var NavArr = [{
    "id": "level1",
    "icon":"&#xe603;",
    "text": "表单例子",
    "url": "demoBasic.html",
},{
    "id": "level3",
    "text": "demo例子",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "表格例子",
        "children": [{
            "id": "level100",
            "url": "easyuiTables.html",
            "text": "普通表格"
        }]
    },{
        "id": "level12",
        "text": "新页面的使用",
        "children": [{
            "id": "level102",
            "url": "businessOpportunity.html",
            "text": "商机信息录入"
        }, {
            "id": "level101",
            "url": "workbench.html",
            "text": "工作台"
        }]
    }]
},  {
    "id": "level2",
    "text": "工作台",
    "icon": "&#xe66c;",
    "children": [{
        "id": "level10",
        "url": "http://www.baidu.com/",
        "text": "管理者工作台"
    }, {
        "id": "level10",
        "url": "http://fanyi.baidu.com/#zh/en/",
        "text": "客户经理工作台"
    }, {
        "id": "level10",
        "url": "http://fanyi.baidu.com/#zh/en/",
        "text": "微信公众号工作台"
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe65d;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}, {
    "id": "level3",
    "text": "一级菜单3",
    "icon": "&#xe646;",
    "children": [{
        "id": "level10",
        "text": "二级菜单0",
        "children": [{
            "id": "level100",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1000",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1010",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level101",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1001",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1011",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    },{
        "id": "level12",
        "text": "二级菜单2",
        "children": [{
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单00",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	        }]
        }, {
            "id": "level102",
            "url": "http://fanyi.baidu.com/#zh/en/",
            "text": "三级菜单01",
            "children": [{
	            "id": "level1002",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单00"
	        }, {
	            "id": "level1012",
	            "url": "http://fanyi.baidu.com/#zh/en/",
	            "text": "四级菜单01"
	     	}]
        }]
    }]
}];

/*配置生成菜单配置对象*/
/**
 * onClick的函数会返回三个参数title,url,id
 */
var barsObj = {
    "data": NavArr,
    "onClick": function(title, url, id) {
        addNewTab(title, url, id, true);
        //菜单使用情况日志写在这里
    }
};
//初始化第一个不可关闭的frame
var initTabs = function() {
    $("#frame-tab").tabs({
        fit: true,
        border: false,
        height: '24px',
        tabHeight: '24px',
        onAdd:function(title,index){
        	if(index == 0){
        		$('.tabs > li:eq(0) .tabs-title').css('padding-right',0);
        	}else{
        		//$('.tabs > li:eq('+index+') .tabs-title').css('padding-right',10);
        	}
        }
    });
    //窗口resize的时候调用easyui的tabs插件的自适应函数
    $(window).resize(function() {
        $("#frame-tab").tabs("resize");
    });
}

// add a new tab panel
var addNewTab = function(title, url, id, closable, isRefresh) {
	var nurl = "";
	if(url=="/"){
		nurl = ""
	}else if(url.indexOf("http://") == 0){
		nurl = url;
	}else{
		//nurl = webpath + url;
		nurl = url;
	}
	//添加新的tab或者切换页面
	var $tab = $('#frame-tab');
    if ($tab.tabs('existsById', id)) {
        $tab.tabs('selectById', id);
        if(isRefresh){
        	var content = '<iframe id="' + id + '" src="' + nurl + '" allowTransparency="true" width="100%" height="100%" frameBorder="0" scrolling="auto"></iframe>';
        	var currTab = $tab.tabs('getTab', title);  
        	$tab.tabs('update', {tab: currTab, options: {content: content, closable: closable}});  
        }
    } else {
        $tab.tabs('add', {
            id: id,
            title: title,
            content: '<iframe id="' + id + '" src="' + nurl + '" allowTransparency="true" width="100%" height="100%" frameBorder="0" scrolling="auto"></iframe>',
            closable: closable,
            tools: [{
                iconCls: 'icon-refresh',
                handler: function() {
                    refreshTab({ tabTitle: title, url: url });
                }
            }]
        });
        $tab.tabs('selectById', id);
	}
}

/**       
 * 刷新tab   
 * @cfg    
 *example: {tabTitle:'tabTitle',url:'refreshUrl'}   
 *如果tabTitle为空，则默认刷新当前选中的tab   
 *如果url为空，则默认以原来的url进行reload   
 */
var refreshTab = function(cfg) {
    var $tab = $('#frame-tab');
    var refresh_tab = cfg.tabTitle ? $tab.tabs('getTab', cfg.tabTitle) : $tab.tabs('getSelected');
    if (refresh_tab && refresh_tab.find('iframe').length > 0) {
        var _refresh_ifram = refresh_tab.find('iframe')[0];
        var refresh_url = cfg.url ? cfg.url : _refresh_ifram.src;
        _refresh_ifram.contentWindow.location.href = $(_refresh_ifram).prop("src");
    }
}

//绑定头部下拉的点击事件
function dmenuClick(){
	$(".dmenu-a").unbind().click(function(e){
		e = e || window.event;
        e.stopPropagation();
        var $this = $(this)
        ,downInfo = $this.parent().find(".dropdownInfo");
        $(".dmenu-a").removeClass('active');
        if(!downInfo){
            return;
        }
        if(downInfo.is(':hidden')){
            $(this).addClass('active');
            $(".dropdownInfo").hide();
            downInfo.show();
        }else if(downInfo.is(':visible')){
            downInfo.hide();
        }
        $('.onlineUsersUl, .noticeWrap').getNiceScroll().resize();
    });
    
    //窗口点击关闭所有头部菜单下拉框
    $(window).click(function(event){
        $(".dropdownInfo").hide();
        $(".dmenu-a").removeClass('active');
 	});
}

var logoutClick = function(){
    $("#logout").bind("click", function() {
        layer.confirm('是否退出系统？', {
            icon: 3,
            btn: ['是', '否'] //按钮
        }, function() {
           // window.location.href = webpath + "/login/logout";
        }, function() {
            return;
        });
    });
};
var moreNoticeClick = function(){
    //查看更多公告
    /*$("#loadMoreNotice").bind("click", function() {
        addNewTab('我的公告', '/cusnotice/index', 'noticeTbl', true);
    });*/
};

function addNiceScroll(){
	$('.onlineUsersUl, .noticeWrap').niceScroll({cursorcolor:"#ddd",cursorwidth: "5px",cursorborder:"none"});
}

function calcWidthHeight(){
	var btmHeight = $(window).height() - $('.frame-head').height() - 1;
	var mainWidth = $(window).width() - $('.frame-nav').width();
	
	$('#frame-nav').height(btmHeight);
	$('#frame-content').width(mainWidth).height(btmHeight);
	$('.frame-main').height(btmHeight - $('.frame-tab').height());
}

/*把头部的在线用户数提示和消息通知数量做处理*/
function reprocessHeadCont(){
	$('.redCirBk').each(function(){
		if($(this).text().length > 2){
			$(this).html('&#xe602;').addClass('iconfont newPrompt').removeClass('redCirBk');
		}
	});
}

$(function(){
	addNiceScroll();
	$(window).resize(function(){
		calcWidthHeight();
	}).resize();
	initTabs();
	dmenuClick();
	logoutClick();
	$('#frame-nav').boncNav(barsObj);
	reprocessHeadCont();
});

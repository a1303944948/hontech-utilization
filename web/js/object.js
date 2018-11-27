var viewObj = [
	{name:'20吨冲床',jiacon:'50%',dongcon:'60%'},
	{name:'35吨冲床',jiacon:'40%',dongcon:'90%'},
	{name:'50吨冲床',jiacon:'30%',dongcon:'40%'},
	{name:'三星机械臂',jiacon:'90%',dongcon:'10%'},
	{name:'五星机械臂',jiacon:'85%',dongcon:'75%'},
	{name:'七星机械臂',jiacon:'50%',dongcon:'80%'},
	{name:'超级管理设备器',jiacon:'100%',dongcon:'90%'},
	{name:'超级设备管理器',jiacon:'80%',dongcon:'40%'},
	{name:'20吨冲床',jiacon:'50%',dongcon:'60%'},
	{name:'35吨冲床',jiacon:'40%',dongcon:'15%'},
	{name:'50吨冲床',jiacon:'30%',dongcon:'40%'},
	{name:'三星机械臂',jiacon:'90%',dongcon:'14%'},
	{name:'五星机械臂',jiacon:'85%',dongcon:'75%'},
	{name:'七星机械臂',jiacon:'50%',dongcon:'50%'},
	{name:'超级管理设备器',jiacon:'100%',dongcon:'90%'},
	{name:'超级设备管理器',jiacon:'80%',dongcon:'40%'},
	{name:'20吨冲床',jiacon:'50%',dongcon:'60%'},
	{name:'35吨冲床',jiacon:'40%',dongcon:'90%'},
	{name:'七星机械臂',jiacon:'50%',dongcon:'50%'},
	{name:'超级管理设备器',jiacon:'100%',dongcon:'90%'},
	{name:'超级设备管理器',jiacon:'80%',dongcon:'40%'},
	{name:'20吨冲床',jiacon:'50%',dongcon:'60%'},
	{name:'35吨冲床',jiacon:'40%',dongcon:'90%'},
	{name:'七星机械臂',jiacon:'50%',dongcon:'50%'},
	{name:'超级管理设备器',jiacon:'100%',dongcon:'90%'},
	{name:'超级设备管理器',jiacon:'80%',dongcon:'40%'},
	{name:'20吨冲床',jiacon:'50%',dongcon:'60%'},
	{name:'35吨冲床',jiacon:'40%',dongcon:'90%'},
]

//首页稼动率排名  
//machName设备名称  machId设备编号  owner工厂编号  ownerText工厂名称   text实际稼动率  normal稼动率标准  typeId设备类型编号  typeName设备类型名称
var rankObj = [
	{machName: '折弯001',machId:'1',owner: 'zjjf',ownerText: '浙江嘉丰',text: '90%',normal: '80%',typeId: 'Bending',typeName: '折弯'},
	{machName: '冲压004',machId:'2',owner: 'zjjf',ownerText: '浙江嘉丰',text: '89%',normal: '80%',typeId: 'Punching',typeName: '冲压'},
	{machName: '手工焊接003',machId:'3',owner: 'dgjf',ownerText: '东莞嘉丰',text: '79%',normal: '80%',typeId: 'welding-robot',typeName: '机器焊接'},
	{machName: '机器焊接002',machId:'4',owner: 'dgjf',ownerText: '东莞嘉丰',text: '78%',normal: '80%',typeId: 'welding',typeName: '手工焊接'},
	{machName: '点焊015',machId:'5',owner: 'zjjf',ownerText: '浙江嘉丰',text: '78%',normal: '80%',typeId: 'spot-welder',typeName: '点焊'},
	{machName: '折弯016',machId:'6',owner: 'dgjf',ownerText: '东莞嘉丰',text: '76%',normal: '70%',typeId: 'Bending',typeName: '折弯'},
	{machName: '折弯017',machId:'7',owner: 'zjjf',ownerText: '浙江嘉丰',text: '70%',normal: '70%',typeId: 'Bending',typeName: '折弯'},
	{machName: '折弯018',machId:'8',owner: 'dgjf',ownerText: '东莞嘉丰',text: '66%',normal: '70%',typeId: 'Bending',typeName: '折弯'},
	{machName: '折弯019',machId:'9',owner: 'dgjf',ownerText: '东莞嘉丰',text: '50%',normal: '80%',typeId: 'Bending',typeName: '折弯'},
]

//首页点击进去后详情页接口
//machId设备编号   machName设备名称  group组长  manager经理  rank排名  total实际总做功  normal做功标准  text实际稼动率  
//arr(name时间段名称 total时间段总做功 startTime首次做功时间 endTime末次做功时间 text实际稼动率)上午下午晚上数据集合  time日期  
//lastSevenDays(text实际做功率 normal标准做功率 date日期 week星期几)最近七天数据集合
var rankViewObj = {machId: '1',machName: '折床001',group: '邢天铭',manager: '黄勤飞',rank:'1',total: '7200',normal: '8000',text: '90%',arr: [{name: '上午',total: '2160',startTime: '7:40',endTime: '11:50',text: '30%'},{name: '下午',total: '2160',startTime: '13:00',endTime: '17:10',text: '30%'},{name: '晚上',total: '2160',startTime: '17:40',endTime: '20:40',text: '30%'}],time: '2018/11/21',lastSevenDays: [{text: '50%',normal: '80%',date: '11/15',week: '周四'},{text: '80%',normal: '80%',date: '11/16',week: '周五'},{text: '70%',normal: '80%',date: '11/17',week: '周六'},{text: '40%',normal: '80%',date: '11/18',week: '周日'},{text: '20%',normal: '80%',date: '11/19',week: '周一'},{text: '90%',normal: '80%',date: '11/20',week: '周二'},{text: '90%',normal: '80%',date: '11/21',week: '周三'}]};

//记录页面接口
//machId设备编号 machName设备名称 total今日总计做功 normal标准
var recordObj = [
	{machId: '1',machName: '折床001',total: '5600',normal: '8000'+'/8小时'},
	{machId: '2',machName: '折床002',total: '2300',normal: '8000'+'/8小时'},
	{machId: '3',machName: '折床003',total: '4500',normal: '8000'+'/8小时'},
	{machId: '4',machName: '折床004',total: '7200',normal: '8000'+'/8小时'},
	{machId: '5',machName: '折床005',total: '6500',normal: '8000'+'/8小时'},
	{machId: '6',machName: '折床006',total: '4800',normal: '8000'+'/8小时'},
	{machId: '7',machName: '折床007',total: '5500',normal: '8000'+'/8小时'},
	{machId: '8',machName: '折床008',total: '5700',normal: '8000'+'/8小时'},
	{machId: '9',machName: '折床009',total: '5600',normal: '8000'+'/8小时'},
	{machId: '10',machName: '冲床001',total: '400',normal: '480'+'/8小时'},
	{machId: '11',machName: '冲床002',total: '360',normal: '480'+'/8小时'},
	{machId: '12',machName: '折床005',total: '6500',normal: '8000'+'/8小时'},
	{machId: '13',machName: '折床006',total: '4800',normal: '8000'+'/8小时'},
	{machId: '14',machName: '折床007',total: '5500',normal: '8000'+'/8小时'},
	{machId: '15',machName: '折床008',total: '5700',normal: '8000'+'/8小时'},
	{machId: '16',machName: '折床009',total: '5600',normal: '8000'+'/8小时'},
	{machId: '17',machName: '冲床001',total: '400',normal: '480'+'/8小时'},
	{machId: '18',machName: '冲床002',total: '360',normal: '480'+'/8小时'},
]


//最近三十天页面接口
//machName设备名称  machId设备ID  owner工厂ID  ownerText工厂名称  text三十天内未做功天数  typeId设备类型编号  typeName设备类型名称
var last30days = [
	{machName: '折弯001',machId:'1',owner: 'zjjf',ownerText: '浙江嘉丰',text: '12',typeId: 'Bending',typeName: '折弯'},
	{machName: '冲压004',machId:'2',owner: 'zjjf',ownerText: '浙江嘉丰',text: '11',typeId: 'Punching',typeName: '冲压'},
	{machName: '手工焊接003',machId:'3',owner: 'dgjf',ownerText: '东莞嘉丰',text: '9',typeId: 'welding-robot',typeName: '机器焊接'},
	{machName: '机器焊接002',machId:'4',owner: 'dgjf',ownerText: '东莞嘉丰',text: '8',typeId: 'welding',typeName: '手工焊接'},
	{machName: '点焊015',machId:'5',owner: 'zjjf',ownerText: '浙江嘉丰',text: '8',typeId: 'spot-welder',typeName: '点焊'},
	{machName: '折弯016',machId:'6',owner: 'dgjf',ownerText: '东莞嘉丰',text: '6',typeId: 'Bending',typeName: '折弯'},
	{machName: '折弯017',machId:'7',owner: 'zjjf',ownerText: '浙江嘉丰',text: '6',typeId: 'Bending',typeName: '折弯'},
	{machName: '折弯018',machId:'8',owner: 'dgjf',ownerText: '东莞嘉丰',text: '6',typeId: 'Bending',typeName: '折弯'},
	{machName: '折弯019',machId:'9',owner: 'dgjf',ownerText: '东莞嘉丰',text: '5',typeId: 'Bending',typeName: '折弯'},
]

//最近三十天详情页面接口
//machId设备ID  machName设备名称  group组长  manager经理  total最近三十天总做功  stop未做功天数  start做功天数  
//dateArr最近三十天做功明细一共三十条数据，做功传1，未做功传0，时间为当前的前一天为开始时间
var last30daysView = {machId: '1',machName: '折床001',group: '邢天铭',manager: '黄勤飞',total: '35800',stop: '20',start: '10',dateArr: [1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1]};
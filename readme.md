# 1 安装
```
npm install storage-user-info
```

----------------------------------------------------------------------

# 2 介绍
```
适用于存储个人id下的所有信息，可存储sessionStrage, localStorage
```

----------------------------------------------------------------------

# 3 用法介绍 API
```
import storage from 'storage-user-info';

可放在main文件做根方法

// 获取
storage.getter({
    type: 'local', // session
    name: 'id',  // 存储对象 如userId
    item: 'userInfo' // 非必填, 如果存储对象为对象，则获取对象下的谋个条目
})

// 插入
.setter({
    type: 'local', // session
    name: 'id',  // 存储对象 如userId
    item: 'userInfo' // 非必填, 如果存储对象为对象，则插入对象下的某个条目
    value: '' // 插入值
})

// 删除
.remove({
    type: 'local', // session
    name: 'id',  // 删除对象 如userId
    item: 'userInfo' // 非必填, 如果存储对象为对象，则删除对象下的谋个条目
})

// 清空所有session
.clear({
    type: 'local', // session
})
----------------------------------------------------------------------


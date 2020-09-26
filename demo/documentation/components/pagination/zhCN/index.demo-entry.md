# 分页 Pagination
<!--single-column-->
长数据之友。
## 演示
```demo
basic
slot
quick-jumper
size-picker
disabled
```

## Props
|名称|类型|默认值|说明|
|-|-|-|-|
|page-count|`number`|`null`||
|page-sizes|`Array<number>`|`[]`||
|page-size|`number`|`null`||
|page-slot|`number`|`9`||
|page|`number`|`null`||
|show-quick-jumper|`boolean`|`false`||
|show-size-picker|`boolean`|`false`||
|theme|`'light' \| 'dark' \| null \| string`|`null`||
|on-update:page-size|`(pageSize: number) => any`|`null`||
|on-update:page|`(page: number) => any`|`null`||
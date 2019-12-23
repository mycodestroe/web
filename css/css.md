### CSS 学习
### px转vw 插件
#### 命令行输入：yarn add postcss-px-to-viewport 或 npm i postcss-px-to-viewport -save -dev
package.json中，在postcss中添加代码
```text 6
"postcss": {
        "plugins": {
            "autoprefixer": {},
            "postcss-px-to-viewport": {
                "viewportWidth": 750,
                "unitPrecision": 3,
                "minPixelValue": 1
            }
        }
    }

```
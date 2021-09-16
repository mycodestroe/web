<!--
 * @Description: 
 * @Author: wangdelei
 * @Date: 2021-07-07 10:03:25
 * @LastEditors: wangdelei
 * @LastEditTime: 2021-09-16 15:41:33
-->
### git init "在本地初始化git仓库"
### git add file "添加文件到暂存区"
### git commit -m 'xxx' "将文件提交到git仓库"
### git commit --no-verify -m 'xxx' "跳过代码校验 提交代码"
### git status "查看文件状态"
### git diff  "查看修改内容"
### git log "查看提交历史"
### git reflog "查看命令历史"
### git reset --hard commit_id "本地版本回退" 
### git revert "远端版本号" "远端回退上一版"
### git checkout --file  "丢弃工作区修改"
### git rm file "用来删除一个文件"
### git remote add origin git@server-name:path/repo-name.git "关联一个远端仓库"
### git clone 远端地址 "克隆远端仓库到本地"
### git branch "查看分支 *代表当前分支"
### git branch 'name' "创建新分支"
### git checkout 'name' "创建分支并且切换到分支"
### git merge '分支名' "将分支merge到当前分支"
### git branch -d 'name' "删除分支"
### git log --graph "查看分支合并图"
### git remote -v "查看远程库信息"
### git tag "查看所有标签"
### git tag 'name' "新建标签"
### git tag 'name' commit id "为指定标签打tag"
### git tag -a 'name' -m 'xxx' "指定标签信息"
### git tag -d 'tagname' "删除标签"
### git push origin --tags "推送全部未推送的标签"
### git push -u origin master "第一次推送远端内容"
### git push origin master --force "强制推送远程"
### git push origin 'tagname' "向远程推送本地标签"
### git push origin :refs/tags/'tagname' "删除一个远程标签"
### git push --set-upstream origin dev "本地新建分支推送远端"
### git remote set-url origin "新地址" "更改本地仓库的远程地址"
### git remote prune origin "远程分支删除后 本地同步远程分支"
### git cherry-pick '版本号' "将其他分支提交代码拉到本分支"
### git git stash 暂存当前修改 可以切换分支后释放
### git stash pop 在当前分支释放最后一次暂存 释放后会删除记录
//十一、 描述标记整理算法的工作流程
// 是标记清除的增强，标记阶段跟标记清除一样，去遍历所有对象 将所有可达对象进行标记，在清除阶段，标记清除直接回收没有标记的对象
//而标记整理会在清除之前去做一个整理的操作，移动对象的位置，让他们能在地址上面产生连续 这就是标记整理算法
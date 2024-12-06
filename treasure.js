document.addEventListener("DOMContentLoaded", () => {
  const progress = document.getElementById("progress");
  const taskContainer = document.getElementById("task-container");
  const startBtn = document.getElementById("start-btn");

  // 异步任务数组
  const tasks = [
    { name: "探索神秘森林", duration: 2000 },
    { name: "穿越迷雾沼泽", duration: 3000 },
    { name: "发现神秘迷宫", duration: 3000 },
    { name: "躲过重重陷阱", duration: 3000 },
    { name: "破解古代密码", duration: 2500 },
    { name: "找到藏宝箱", duration: 4000 },
    { name: "迷宫自毁启动", duration: 3000 },
    { name: "侥幸逃出迷宫", duration: 3000 },
  ];

  // 执行异步任务
  async function startTreasureHunt() {
    startBtn.style.display = "none"; // 隐藏开始按钮
    let completedTasks = 0;

    for (let task of tasks) {
      // 更新任务状态
      await performTask(task);
      completedTasks++;
      updateProgress((completedTasks / tasks.length) * 100); // 更新进度条
    }

    // 寻宝完成
    taskContainer.innerHTML = `<h2>恭喜你，寻宝成功！</h2>`;
    taskContainer.classList.add("complete");
  }

  // 执行单个任务
  function performTask(task) {
    return new Promise((resolve) => {
      // 动态显示任务
      const taskElement = document.createElement("div");
      taskElement.textContent = `正在进行任务：${task.name}...`;
      taskContainer.appendChild(taskElement);

      setTimeout(() => {
        taskElement.textContent = `任务完成：${task.name}`;
        taskElement.classList.add("complete");
        resolve(); // 完成任务
      }, task.duration);
    });
  }

  // 更新进度条
  function updateProgress(percent) {
    progress.style.width = `${percent}%`;
  }

  // 绑定开始按钮点击事件
  startBtn.addEventListener("click", startTreasureHunt);
});

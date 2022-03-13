import "./styles.css";

const onClickAdd = () => {
  // input
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createFromInCompleteList(inputText);
};

// 未完了リストの削除
const deleteFromInCompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストの追加
const createFromInCompleteList = (text) => {
  // div
  const div = document.createElement("div");
  div.className = "list-row";

  // li
  const li = document.createElement("li");
  li.innerText = text;

  // 完了
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 未完了リストから削除
    deleteFromInCompleteList(completeButton.parentNode);

    // 完了　リストに追加
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    // divを初期化
    addTarget.textContent = null;

    // li
    const li = document.createElement("li");
    li.innerText = text;

    // 戻すボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻る";
    backButton.addEventListener("click", () => {
      // リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createFromInCompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 　削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 未完了リストから削除
    deleteFromInCompleteList(deleteButton.parentNode);
  });

  // divに子要素を追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 追加ボタン
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

const taskContainer = document.querySelector(".task__container");
const generateNewCard = (taskData) => `
<div class="col-md-6 col-lg-4 mt-3" >
<div class="card shadow-sm task__card">
  <div class="card-header d-flex justify-content-end task__card__header">
    <button type="button" class="btn btn-outline-info mr-2" >
      <i class="fas fa-pencil-alt"></i>
    </button>
    <button type="button" class="btn btn-outline-danger" ">
      <i class="fas fa-trash-alt" ></i>
    </button>
  </div>
  <div class="card-body">
            <img width="100%" src="${taskData.imageUrl}" alt="Card image cap" class="card-img-top mb-3 rounded-lg">
  
    <h4 class="task__card__title">${taskData.taskTitle}</h4>
    <p class="description trim-3-lines text-muted" >
     ${taskData.taskDesc}
    </p>
    <div class="tags text-white d-flex flex-wrap">
      <span class="badge bg-primary m-1">${taskData.taskType}</span>
    </div>
  </div>
  <div class="card-footer">
    <button type="button" class="btn btn-outline-primary float-right"">
      Open Task
    </button>
  </div>
</div>
</div>

`;
const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}`,
    imageUrl: document.getElementById("imageUrl").value,
    taskTitle: document.getElementById("taskTitle").value,
    taskType: document.getElementById("taskType").value,
    taskDesc: document.getElementById("taskDesc").value,
  };
  taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));
  console.log(taskData);
};

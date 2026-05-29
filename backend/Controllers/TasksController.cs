using Microsoft.AspNetCore.Mvc;

using backend.Models;
using backend.Data;

namespace backend.Controllers;

[ApiController]
[Route("tasks")]
public class TasksController : ControllerBase
{
    [HttpGet]
    public ActionResult<List<TaskItem>> GetTasks()
    {
        return Ok(TaskStore.Tasks);
    }

    [HttpPost]
    public ActionResult<TaskItem> CreateTask(TaskItem task)
    {
        task.Id = TaskStore.Tasks.Count + 1;

        TaskStore.Tasks.Add(task);

        return Ok(task);
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteTask(int id)
    {
        var task = TaskStore.Tasks.FirstOrDefault(
            t => t.Id == id
        );

        if (task == null)
        {
            return NotFound();
        }

        TaskStore.Tasks.Remove(task);

        return NoContent();
    }

    [HttpPut("{id}")]
    public ActionResult<TaskItem> UpdateTask(
        int id,
        TaskItem updatedTask
    )
    {
        var task = TaskStore.Tasks.FirstOrDefault(
            t => t.Id == id
        );

        if (task == null)
        {
            return NotFound();
        }

        task.Title = updatedTask.Title;
        task.Completed = updatedTask.Completed;

        return Ok(task);
    }
}
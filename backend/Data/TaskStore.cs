using backend.Models;

namespace backend.Data;

public static class TaskStore
{
    public static List<TaskItem> Tasks { get; set; } = new();
}
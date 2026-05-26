using System.Net;
using System.Net.Http.Json;

using Microsoft.AspNetCore.Mvc.Testing;

using Xunit;

namespace tests;

public class TasksApiTests
    : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _client;

    public TasksApiTests(
        WebApplicationFactory<Program> factory
    )
    {
        _client = factory.CreateClient();
    }

    [Fact]
    public async Task GetTasks_ReturnsSuccess()
    {
        var response = await _client.GetAsync("/tasks");

        Assert.Equal(
            HttpStatusCode.OK,
            response.StatusCode
        );
    }

    [Fact]
    public async Task CreateTask_ReturnsSuccess()
    {
        var task = new
        {
            title = "Test Task"
        };

        var response = await _client.PostAsJsonAsync(
            "/tasks",
            task
        );

        Assert.Equal(
            HttpStatusCode.OK,
            response.StatusCode
        );
    }
}
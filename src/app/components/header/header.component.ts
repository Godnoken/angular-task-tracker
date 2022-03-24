import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "TaskTracks";

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  handleAddTaskVisibility(): void {
    const addTaskButton = this.renderer.selectRootElement(".add-task-button", true);
    const addTaskContainer = this.renderer.selectRootElement(".add-task-container", true);

    if (addTaskContainer?.classList.contains("active")) {
      this.renderer.removeClass(addTaskContainer, "active");
      this.renderer.setStyle(addTaskContainer, "display", "none");
      this.renderer.setProperty(addTaskButton, "textContent", "Add");
    }
    else {
      this.renderer.addClass(addTaskContainer, "active");
      this.renderer.setStyle(addTaskContainer, "display", "block");
      this.renderer.setProperty(addTaskButton, "textContent", "Close");
    }
  }
}

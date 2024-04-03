// Sample leave data (for demonstration)
var leaveData = [
    { employeeName: "John Doe", leaveType: "Sick Leave", startDate: "2024-03-10", endDate: "2024-03-12", status: "pending" },
    { employeeName: "Jane Smith", leaveType: "Vacation", startDate: "2024-03-15", endDate: "2024-03-20", status: "approved" },
    { employeeName: "Mike Johnson", leaveType: "Personal Leave", startDate: "2024-03-25", endDate: "2024-03-27", status: "declined" }
  ];
  
  // Display leave requests
  var leaveRequestsList = document.getElementById("leaveRequests").getElementsByTagName("ul")[0];
  leaveData.forEach(function(leave) {
    var leaveItem = document.createElement("li");
    leaveItem.textContent = leave.employeeName;
    leaveItem.classList.add("leave-item");
    leaveItem.dataset.status = leave.status;
    leaveItem.addEventListener("click", function() {
      var modal = document.getElementById("leaveModal");
      var modalContent = modal.getElementsByClassName("modal-content")[0];
      modalContent.innerHTML = "";
      var leaveDetails = document.createElement("div");
      leaveDetails.innerHTML = "<p><strong>Employee Name:</strong> " + leave.employeeName + "</p>" +
                               "<p><strong>Leave Type:</strong> " + leave.leaveType + "</p>" +
                               "<p><strong>Start Date:</strong> " + leave.startDate + "</p>" +
                               "<p><strong>End Date:</strong> " + leave.endDate + "</p>";
      modalContent.appendChild(leaveDetails);
      if (leave.status === "pending") {
        var buttonGroup = document.createElement("div");
        buttonGroup.classList.add("button-group");
        var approveBtn = document.createElement("button");
        approveBtn.textContent = "Approve";
        approveBtn.addEventListener("click", function() {
          alert("Leave Approved for " + leave.employeeName);
          modal.style.display = "none";
          leave.status = "approved";
          updateLeaveRequests();
        });
        buttonGroup.appendChild(approveBtn);
        var declineBtn = document.createElement("button");
        declineBtn.textContent = "Decline";
        declineBtn.addEventListener("click", function() {
          alert("Leave Declined for " + leave.employeeName);
          modal.style.display = "none";
          leave.status = "declined";
          updateLeaveRequests();
        });
        buttonGroup.appendChild(declineBtn);
        modalContent.appendChild(buttonGroup);
      }
      modal.style.display = "block";
    });
    leaveRequestsList.appendChild(leaveItem);
  });
  
  // Update leave requests list
  function updateLeaveRequests() {
    leaveRequestsList.innerHTML = "";
    leaveData.forEach(function(leave) {
      if (leave.status === "pending") {
        var leaveItem = document.createElement("li");
        leaveItem.textContent = leave.employeeName;
        leaveItem.classList.add("leave-item");
        leaveItem.dataset.status = leave.status;
        leaveItem.addEventListener("click", function() {
          var modal = document.getElementById("leaveModal");
          var modalContent = modal.getElementsByClassName("modal-content")[0];
          modalContent.innerHTML = "";
          var leaveDetails = document.createElement("div");
          leaveDetails.innerHTML = "<p><strong>Employee Name:</strong> " + leave.employeeName + "</p>" +
                                   "<p><strong>Leave Type:</strong> " + leave.leaveType + "</p>" +
                                   "<p><strong>Start Date:</strong> " + leave.startDate + "</p>" +
                                   "<p><strong>End Date:</strong> " + leave.endDate + "</p>";
          modalContent.appendChild(leaveDetails);
          if (leave.status === "pending") {
            var buttonGroup = document.createElement("div");
            buttonGroup.classList.add("button-group");
            var approveBtn = document.createElement("button");
            approveBtn.textContent = "Approve";
            approveBtn.addEventListener("click", function() {
              alert("Leave Approved for " + leave.employeeName);
              modal.style.display = "none";
              leave.status = "approved";
              updateLeaveRequests();
            });
            buttonGroup.appendChild(approveBtn);
            var declineBtn = document.createElement("button");
            declineBtn.textContent = "Decline";
            declineBtn.addEventListener("click", function() {
              alert("Leave Declined for " + leave.employeeName);
              modal.style.display = "none";
              leave.status = "declined";
              updateLeaveRequests();
            });
            buttonGroup.appendChild(declineBtn);
            modalContent.appendChild(buttonGroup);
          }
          modal.style.display = "block";
        });
        leaveRequestsList.appendChild(leaveItem);
      }
    });
  }
  
  // Attendance Management
  var attendanceData = [
    { employeeName: "John Doe", date: "2024-03-01", status: "Present", hasLeave: false },
    { employeeName: "Jane Smith", date: "2024-03-01", status: "Absent", hasLeave: true },
    { employeeName: "Mike Johnson", date: "2024-03-01", status: "Present", hasLeave: false }
  ];
  
  var attendanceList = document.createElement("div");
  attendanceData.forEach(function(attendance) {
    var item = document.createElement("div");
    item.classList.add("attendance-item");
  
    var name = document.createElement("span");
    name.textContent = "Employee: " + attendance.employeeName;
    item.appendChild(name);
  
    var date = document.createElement("span");
    date.textContent = "Date: " + attendance.date;
    item.appendChild(date);
  
    var status = document.createElement("span");
    status.textContent = "Status: " + attendance.status;
    item.appendChild(status);
  
    if (attendance.hasLeave) {
      var leaveButton = document.createElement("button");
      leaveButton.textContent = "Leave";
      leaveButton.addEventListener("click", function() {
        alert("Redirecting to leave management for " + attendance.employeeName);
        // Add code to redirect to leave management section
      });
      item.appendChild(leaveButton);
    } else {
      var presentButton = document.createElement("button");
      presentButton.textContent = "Present";
      presentButton.addEventListener("click", function() {
        alert("Marking " + attendance.employeeName + " as Present");
        // Add code to mark employee as Present
      });
      item.appendChild(presentButton);
  
      var absentButton = document.createElement("button");
      absentButton.textContent = "Absent";
      absentButton.addEventListener("click", function() {
        alert("Marking " + attendance.employeeName + " as Absent");
        // Add code to mark employee as Absent
      });
      item.appendChild(absentButton);
    }
  
    attendanceList.appendChild(item);
  });
  
  document.getElementById("attendanceManagement").querySelector("#attendanceList").appendChild(attendanceList);
  
  // Sidebar functionality
  var sidebarItems = document.querySelectorAll(".sidebar ul li a");
  var panels = document.querySelectorAll(".panel");
  
  sidebarItems.forEach(function(item, index) {
    item.addEventListener("click", function() {
      sidebarItems.forEach(function(item) {
        item.classList.remove("active");
      });
      panels.forEach(function(panel) {
        panel.classList.remove("active");
      });
      item.classList.add("active");
      panels[index].classList.add("active");
    });
  });
  
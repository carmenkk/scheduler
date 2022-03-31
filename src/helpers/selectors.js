export function getAppointmentsForDay(state, day) {
  let appointmentArr = [];
  let result = [];

  for (const dayObj of state.days) {
    if (dayObj.name === day) {
      dayObj.appointments.forEach((appointment) =>
        appointmentArr.push(appointment)
      );
    }
  }

  appointmentArr.forEach((id) => {
    for (const key in state.appointments) {
      if (id === Number(key)) {
        result.push(state.appointments[id]);
      }
    }
  });
  return result;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewObj = state.interviewers;
  const interviewerId = interview.interviewer;

  for (let id in interviewObj) {
    if (Number(id) === interviewerId) {
      return {
        student: interview.student,
        interviewer: interviewObj[id],
      };
    }
  }
}

export function getInterviewersForDay(state, day) {
  let interviewersArr = [];
  let result = [];

  for (const dayObj of state.days) {
    if (dayObj.name === day) {
      dayObj.interviewers.forEach((interviewer) =>
        interviewersArr.push(interviewer)
      );
    }
  }

  interviewersArr.forEach((id) => {
    for (const key in state.interviewers) {
      if (id === Number(key)) {
        result.push(state.interviewers[id]);
      }
    }
  });
  return result;
}

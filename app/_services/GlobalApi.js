import { gql, request } from "graphql-request";

const HIGH_MASTER_URL = `https://ap-northeast-1.cdn.hygraph.com/content/${process.env.NEXT_PUBLIC_HIGH_MASTER_URL_KEY}/master`;

const getCategory = async () => {
  const query = gql`
    query Category {
      categories {
        id
        categoryName
        icon {
          url
        }
      }
    }
  `;
  const result = await request(HIGH_MASTER_URL, query);
  return result;
};

const getAllTasksList = async () => {
  const query = gql`
    query TaskList {
      taskLists {
        about
        address
        contactPerson
        category {
          categoryName
        }
        email
        images {
          url
        }
        id
        name
      }
    }
  `;
  const result = await request(HIGH_MASTER_URL, query);
  return result;
};

const getTaskByCategory = async (category) => {
  const query = gql`
    query ByCategory {
      taskLists(where: { category: { categoryName: "${category}" } }) {
        about
        address
        contactPerson
        category {
          categoryName
        }
        email
        images {
          url
        }
        id
        name
      }
    }
  `;
  const result = await request(HIGH_MASTER_URL, query);
  return result;
};

const getTaskDetail = async (id) => {
  const query = gql`
    query TaskDetail {
      taskList(where: { id: "${id}" }) {
        about
        address
        category {
          categoryName
        }
        contactPerson
        email
        id
        images {
          url
        }
        name
      }
    }
  `;
  const result = await request(HIGH_MASTER_URL, query);
  return result;
};

const bookTasker = async (
  taskId,
  date,
  time,
  firstName,
  lastName,
  userEmail
) => {
  const mutationQuery = gql`
    mutation BookTasker {
      createBooking(
        data: {
          bookingStatus: Booked
          taskList: { connect: { id: "${taskId}" } }
          date: "${date}"
          time: "${time}"
          firstName: "${firstName}"
          lastName: "${lastName}"
          userEmail: "${userEmail}"
        }
      ) {
        id
      }
       publishManyBookings(to: PUBLISHED) {
    count
  }
    }
  `;

  const result = await request(HIGH_MASTER_URL, mutationQuery);
  return result;
};

const bookedTask = async (taskId, date) => {
  const query = gql`
    query bookedTask {
      bookings(where: { taskList: { id: "${taskId}" }, date: "${date}" }) {
        date
        time
      }
    }
  `;
  const result = await request(HIGH_MASTER_URL, query);
  return result;
};

const GetUserBookingHistory = async (email) => {
  const query = gql`
    query GetUserBookingHistory {
      bookings(where: { userEmail: "${email}" }, orderBy: publishedAt_DESC) {
        taskList {
          name
          images {
            url
          }
          contactPerson
        }
        date
        time
      }
    }
  `;
  const result = await request(HIGH_MASTER_URL, query);
  return result;
};

export default {
  GetUserBookingHistory,
  bookedTask,
  getTaskByCategory,
  getCategory,
  getAllTasksList,
  getTaskDetail,
  bookTasker,
};

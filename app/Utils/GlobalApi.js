import { request, gql } from 'graphql-request'

const Master_Url = "https://api-ap-south-1.hygraph.com/v2/clr0awp9i3pju01tafxx8gs5b/master"

const GetSliders=async()=>{

    const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
    `
    const results = await request(Master_Url, query);
    return results;
}

const GetCategorys=async()=>{

    const query = gql`
    query GetCategory {
        categories {
          id
          name
          icons {
            url
          }
        }
      }
    `
    const results = await request(Master_Url, query);
    return results;
}

const getBusiness=async()=>{
  const query = gql`
  query GetBusinessList {
    businesses {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      about
      image {
        url
      }
    }
  }
  `
  const results = await request(Master_Url, query);
    return results;
}

const getBusinessList=async(category)=>{
  const query = gql`
  query GetBusinessList {
    businesses(where: {category: {name: "`+category+`"}}) {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      about
      image {
        url
      }
    }
  }
  `
  const results = await request(Master_Url, query);
  return results;
}

const createBooking=async(data)=>{
  const mutationQuery=gql`
  mutation createBooking {
    createBooking(
      data: {bookingStatus: Booked, business: {connect: {id: "`+data.businessId+`"}}, date: "`+data.date+`", time: "`+data.time+`", userEmail: "`+data.userEmail+`", userName: "`+data.userName+`"}
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED) {
      count
    }
  }
  `
  const results = await request(Master_Url, mutationQuery);
  return results;
}

const getUserBooking=async(userEmail)=>{
  const query=gql`
  query GetUserBooking {
    bookings(orderBy: updatedAt_DESC, where: {userEmail: "`+userEmail+`"}) {
      userName
      userEmail
      time
      bookingStatus
      date
      id
      business {
        id
        name
        image {
          url
        }
        email
        contactPerson
        address
        about
      }
    }
  }
  `
  const results = await request(Master_Url, query);
  return results;
}

export default {
    GetSliders,
    GetCategorys,
    getBusiness,
    getBusinessList,
    createBooking,
    getUserBooking
}
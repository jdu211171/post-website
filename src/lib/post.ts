// post.ts

export const sendLikeRequest = async (post_id: number) => {
  try {
    const response = await fetch("https://cgfop8siv2.execute-api.ap-northeast-1.amazonaws.com/api/reaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({'post_id': post_id}),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error sending like:", error);
    return null;
  }
}

export const createNewTopic = async (content: string) => {
  try {
    const response = await fetch("https://cgfop8siv2.execute-api.ap-northeast-1.amazonaws.com/api/post/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({'content': content}),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating topic:", error);
    return null;
  }
}

export const fetchTopic = async (page: number) => {
  try {
    const response = await fetch(`https://cgfop8siv2.execute-api.ap-northeast-1.amazonaws.com/api/post/all?currentLoad=${page}&limit=10`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.getItem('token')}`,
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching topic:", error);
    return null;
  }
}

export const updateTopic = async (post_id: number, content: string) => {
  try {
    const response = await fetch(`https://cgfop8siv2.execute-api.ap-northeast-1.amazonaws.com/api/post/update/${post_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({'content': content}),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating topic:", error);
    return null;
  }
}

export const deleteTopic = async (post_id: number) => {
  try {
    const response = await fetch(`https://cgfop8siv2.execute-api.ap-northeast-1.amazonaws.com/api/post/delete/${post_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('token')}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error deleting topic:", error);
    return null;
  }
}

export const fetchUserTopic = async (page: number) => {
  try {
    const response = await fetch(`https://cgfop8siv2.execute-api.ap-northeast-1.amazonaws.com/api/post/private?currentLoad=${page}&limit=10`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${localStorage.getItem('token')}`,
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching user topic:", error);
    return null;
  }
}
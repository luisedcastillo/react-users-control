export const toUser = data => {
    const { name, email, phone, id } = data;

    return {
        id,
        name,
        email,
        phone
    };
};

export const toUsers = list => (
    list.map(item => toUser(item))
);
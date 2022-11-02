const queriesClientsCredentialsCheckingResolvers = {
    isClientUsernameUsed: async (_, args, {dataSources: {clients}}) => {
        const accountsFound = await clients.findClientByUsername(args.username)
        return !!accountsFound
    },
    isClientEmailUsed: async (_, args, {dataSources: {clients}}) => {
        const accountsFound = await clients.findClientByEmail(args.email)
        return !!accountsFound
    }
};
export {queriesClientsCredentialsCheckingResolvers}

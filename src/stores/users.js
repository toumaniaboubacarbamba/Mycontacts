import { fetchWrapper } from '@/helpers';
import { defineStore } from 'pinia';

export const useUsersStore = defineStore({
    id: 'users',
    state: () => ({
        users: {}
    }),
    actions: {
        async getAll() {
            this.users = { loading: true };
            fetchWrapper.get('https://api-contact.epi-bluelock.bj/api/users')
                .then(users => this.users = users)
                .catch(error => this.users = { error })
        }
    }
});

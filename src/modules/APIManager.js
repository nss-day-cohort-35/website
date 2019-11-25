const remoteURL = './data/cohort.json';

export default {
    getAll() {
        return fetch(`${remoteURL}`,
        ).then(result => result.json()
        );
    }
}
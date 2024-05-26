<template>
  <div>
    <h1 id="title">Survey</h1>
    <form @submit.prevent="submitData" id="surveyForm">
      <div id="formContainer">
        <div>
          <label for="name">1. Enter your name: </label>
          <input v-model="survey.name" type="text" id="name" name="name">
        </div>

        <div>
          <label for="gender">2. Select your gender:</label>
          <select v-model="survey.gender" id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div>
          <label>3. How do you usually travel?</label><br>
          <input v-model="survey.travelMethods" type="checkbox" id="car" name="travelMethod" value="car">
          <label for="car">Car</label><br>
          <input v-model="survey.travelMethods" type="checkbox" id="publicTransport" name="travelMethod" value="publicTransport">
          <label for="publicTransport">Public Transport</label><br>
          <input v-model="survey.travelMethods" type="checkbox" id="bike" name="travelMethod" value="bike">
          <label for="bike">Bike</label><br>
          <input v-model="survey.travelMethods" type="checkbox" id="walking" name="travelMethod" value="walking">
          <label for="walking">Walking</label>
        </div>

        <div>
          <label for="age">4. Enter your age:</label>
          <input v-model="survey.age" type="number" id="age" name="age" min="18" max="100">
        </div>

        <div>
          <label>5. Select your favorite color: </label>
          <input v-model="survey.fav_color" type="color" id="colorPicker" name="color">
        </div>

        <div>
          <label>6. Have you traveled abroad?</label><br>
          <input v-model="survey.haveTraveled" type="radio" id="yes" name="travelAbroad" value="yes">
          <label for="yes">Yes</label><br>
          <input v-model="survey.haveTraveled" type="radio" id="no" name="travelAbroad" value="no">
          <label for="no">No</label>
        </div>

        <div>
          <label>7. Select your favorite music genre:</label><br>
          <input v-model="survey.musicGenre" type="radio" id="pop" name="musicGenre" value="pop">
          <label for="pop">Pop</label><br>
          <input v-model="survey.musicGenre" type="radio" id="rock" name="musicGenre" value="rock">
          <label for="rock">Rock</label><br>
          <input v-model="survey.musicGenre" type="radio" id="electronic" name="musicGenre" value="electronic">
          <label for="electronic">Electronic</label><br>
          <input v-model="survey.musicGenre" type="radio" id="classical" name="musicGenre" value="classical">
          <label for="classical">Classical</label>
        </div>

        <div>
          <label for="email">8. Enter your email: </label>
          <input v-model="survey.email" type="email" id="email" name="email">
        </div>

        <div>
          <label>9. Select your favorite season:</label><br>
          <input v-model="survey.favoriteSeason" type="radio" id="spring" name="favoriteSeason" value="spring">
          <label for="spring">Spring</label><br>
          <input v-model="survey.favoriteSeason" type="radio" id="summer" name="favoriteSeason" value="summer">
          <label for="summer">Summer</label><br>
          <input v-model="survey.favoriteSeason" type="radio" id="autumn" name="favoriteSeason" value="autumn">
          <label for="autumn">Autumn</label><br>
          <input v-model="survey.favoriteSeason" type="radio" id="winter" name="favoriteSeason" value="winter">
          <label for="winter">Winter</label>
        </div>

        <div>
          <label for="interviewTime">10. Select a convenient time for an interview:</label><br>
          <input v-model="survey.interviewTime" type="datetime-local" id="interviewTime" name="interviewTime">
        </div>

        <button type="submit">Submit</button>
        <button type="button" @click="showResults">Show results</button>
      </div>
    </form>

    <div v-if="showResultsFlag" id="results">
      <h2>Male Pollsters:</h2>
      <div class="pollstersDiv" v-for="pollster in malePollsters" :key="pollster.email">
        <p>Name: {{ pollster.name }}</p>
        <p>Email: {{ pollster.email }}</p>
        <p>Age: {{ pollster.age }}</p>
        <hr>
      </div>

      <h2>Pollesters who have traveled abroad:</h2>
      <div class="pollstersDiv" v-for="pollster in travelAbroad" :key="pollster.email">
        <p>Name: {{ pollster.name }}</p>
        <p>Email: {{ pollster.email }}</p>
        <p>Age: {{ pollster.age }}</p>
        <hr>
      </div>

      <h2>Pollesters who are older than 25:</h2>
      <div class="pollstersDiv" v-for="pollster in olderThan" :key="pollster.email">
        <p>Name: {{ pollster.name }}</p>
        <p>Email: {{ pollster.email }}</p>
        <p>Age: {{ pollster.age }}</p>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SurveyForm',
  data() {
    return {
      survey: {
        name: '',
        gender: '',
        travelMethods: [],
        age: null,
        fav_color: '',
        haveTraveled: '',
        musicGenre: '',
        email: '',
        favoriteSeason: '',
        interviewTime: ''
      },
      submitions: [],
      showResultsFlag: false
    }
  },
  computed: {
    malePollsters() {
      return this.submitions.filter(pollster => pollster.gender === 'male');
    },
    travelAbroad() {
      return this.submitions.filter(pollster => pollster.haveTraveled === 'yes');
    },
    olderThan() {
      return this.submitions.filter(pollster => pollster.age > 25);
    }
  },
  methods: {
    submitData() {
      this.submitions.push({ ...this.survey });
      localStorage.setItem('submitions', JSON.stringify(this.submitions));
      this.survey = {
        name: '',
        gender: '',
        travelMethods: [],
        age: null,
        fav_color: '',
        haveTraveled: '',
        musicGenre: '',
        email: '',
        favoriteSeason: '',
        interviewTime: ''
      };
    },
    showResults() {
      this.showResultsFlag = true;
      const storedSubmitions = localStorage.getItem('submitions');
      if (storedSubmitions) {
        this.submitions = JSON.parse(storedSubmitions);
      }
    }
  }
}
</script>

<style>
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  background-color: #6B8F71;
  font-size: large;
}

button {
  border-radius: 10px;
  border-width: 2px;
  border-color: black;
  box-shadow: none;
  font-size: large;
  color: rgb(0, 0, 0);
  background-color: #6B8F71;
  height: 40px;
}

#formContainer {
  background-color: #aad2ba9d;
  border: solid;
  border-color: #6B8F71;
  border-width: 5px;
  border-radius: 15px;
  width: 33%;
  margin-left: 33%;
  margin-right: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 20px;
}

#results {
  border: solid;
  border-color: #6B8F71;
  border-width: 5px;
  border-radius: 15px;
  width: 33%;
  margin-left: 33%;
  margin-right: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 20px;
}

.pollstersDiv {
  background-color: #aad2ba9d;
  border-color: #6B8F71;
  border-width: 2px;
  border-radius: 15px;
  padding: 10px;
}

hr {
  color: #6B8F71;
}
</style>

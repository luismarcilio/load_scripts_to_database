import * as FirebaseFirestore from "@google-cloud/firestore";

export class SaveConfiguration {
  
    private readonly firestore: FirebaseFirestore.Firestore;
    constructor(firestore: FirebaseFirestore.Firestore){
        this.firestore = firestore;
    }

  async save(configuration: Configuration): Promise<void> {
    await this.firestore.collection("CONFIG").doc(configuration.state).set({
      initialURL: configuration.initialURL,
      javascript: configuration.javascript,
    });
  }
}

# from nltk.classify import NaiveBayesClassifier
# from nltk.corpus import subjectivity
# from nltk.sentiment import SentimentIntensityAnalyzer
# from nltk.sentiment.util import *
# import nltk
# nltk.download('subjectivity')
# n_instances = 100
# subj_docs = [(sent, 'subj') for sent in subjectivity.sents(categories='subj')[:n_instances]]
# obj_docs = [(sent, 'obj') for sent in subjectivity.sents(categories='obj')[:n_instances]]

# # Create the training data
# train_data = subj_docs + obj_docs

# # Initialize the SentimentIntensityAnalyzer
# sia = SentimentIntensityAnalyzer()

# # Define a function to extract features
# def extract_features(document):
#     document_words = set(document)
#     features = {}
#     for word in document_words:
#         features[word] = (word in document_words)
#     return features

# # Extract the features for the training data
# train_set = [(extract_features(d), c) for (d,c) in train_data]

# # Train the classifier
# classifier = NaiveBayesClassifier.train(train_set)

# # Test the classifier
# def classify_text(text):
#     prob_dist = classifier.prob_classify(extract_features(text))
#     pred_sentiment = prob_dist.max()
#     return pred_sentiment

# # Test the classifier
# text = "I am feeling very happy today"
# print(classify_text(text)) # Output: 'subj'

from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

# load the dataset
iris = datasets.load_iris()
X = iris.data
y = iris.target

# split the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

# create a logistic regression model
model = LogisticRegression()

# train the model on the training data
model.fit(X_train, y_train)

# evaluate the model on the test data
accuracy = model.score(X_test, y_test)
print("Accuracy: ", accuracy)
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import TickMarkIcon from '../assets/svgs/ic_tick';

const VotingComponent = ({pollData}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleVote = option => {
    setSelectedOption(option);
  };

  const totalVotes = pollData.options.reduce(
    (sum, option) => sum + option.votes,
    0,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{pollData.question}</Text>
      {pollData.options.map((option, index) => {
        const percentage = Math.round((option.votes / totalVotes) * 100);

        return (
          <TouchableOpacity
            key={index}
            style={styles.optionContainer}
            onPress={() => handleVote(option.text)}>
            <View style={styles.optionFillContainer}>
              <View style={[styles.optionFill, {width: `${percentage}%`}]} />
            </View>

            <View style={styles.radioButton}>
              {selectedOption === option.text && <TickMarkIcon />}
            </View>

            <Text style={styles.optionText}>{option.text}</Text>
            <Text style={styles.percentageText}>{percentage}%</Text>
          </TouchableOpacity>
        );
      })}

      <View style={styles.countContainer}>
        <Text style={styles.totalVotesText}>
          {totalVotes + (selectedOption ? 1 : 0)} votes
        </Text>
        <TouchableOpacity
          style={styles.undoButton}
          onPress={() => setSelectedOption(null)}>
          <Text style={styles.undoText}>Undo vote</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    marginVertical: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  question: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 8,
    backgroundColor: '#FFFFFF',
  },
  optionFillContainer: {
    ...StyleSheet.absoluteFillObject, // This makes it stretch across the whole container
    borderRadius: 5, // Ensure this matches the optionContainer
    overflow: 'hidden',
  },
  optionFill: {
    height: '100%',
    backgroundColor: '#00104010',
  },
  radioButton: {
    width: 14,
    height: 14,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#00083046',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  radioButtonSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  optionText: {
    fontSize: 16,
    color: '#333333',
    flex: 1,
  },
  percentageText: {
    fontSize: 16,
    color: '#62636C',
    marginLeft: 12,
  },
  totalVotesText: {
    fontSize: 14,
    color: '#000107E1',
    marginTop: 12,
  },
  undoButton: {
    marginTop: 16,
  },
  undoText: {
    color: '#0002119D',
    fontSize: 14,
    fontWeight: '600',
  },
  countContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
});

export default VotingComponent;

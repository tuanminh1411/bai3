import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Using FontAwesome icons

const notifications = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    message: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    date: '20/08/2020, 06:00',
    icon: 'check-circle', // Check mark icon
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    message: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    date: '20/08/2020, 06:00',
    icon: 'check-circle', // Check mark icon
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    message: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng khác.',
    date: '20/08/2020, 06:00',
    icon: 'check-circle', // Check mark icon
  },
  {
    id: '4',
    title: 'Khách hàng được thêm bị trùng',
    message: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng chọn thêm khách hàng.',
    date: '20/08/2020, 06:00',
    icon: 'users', // Two people icon
  },
  {
    id: '5',
    title: 'Công việc sắp đến hạn trong hôm nay',
    message: 'Bạn có 17 công việc sắp đến hạn trong hôm nay',
    date: '20/08/2020, 06:00',
    icon: 'users', // Two people icon
  },
  {
    id: '6',
    title: 'Công việc đã quá hạn',
    message: 'Bạn có 17 công việc đã quá hạn. Hãy kiểm tra và kế hoạch hoàn thành công việc.',
    date: '20/08/2020, 06:00',
    icon: 'users', // Two people icon
  },
];

export default function App() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <FontAwesome name={item.icon} size={24} color="#4a90e2" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  list: {
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  iconContainer: {
    justifyContent: 'center',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  message: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  date: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
});

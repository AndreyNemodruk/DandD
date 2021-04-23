/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Content = styled.div`
  background-color: #0279bf;
  min-height: 100vh;
`;

const Picture = styled.img`
  width: 50px;
  height: 50px;
`;

const HeadList = styled.h1`
  font-size: 20px;
  margin: 10px 0;
`;

const Card = styled.div`
  userselect: 'none';
  border-radius: 5px;
  font-size: 12px;
  padding: 16px;
  margin: 0 0 8px 0;
  background: ${(props) => (props.isDragging ? 'lightgreen' : '#ffffff')};
`;

const List = styled.div`
  background: ${(props) => (props.isDraggingOver ? 'lightblue' : '#dee1e6')};
  height: fit-content;
  padding: 8px;
  width: 250px;
  margin: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
`;

const App = () => {
  const [cards, setCards] = useState([
    {
      list: 'cards1',
      title: 'List 1',
      cards: [
        {
          id: '1',
          title: 'Живи быстро, умри рано и оставь большой жирный труп.',
          url:
            'https://ru.seaicons.com/wp-content/uploads/2015/07/Bart-Simpson-05-Greeting-icon.png',
        },
        {
          id: '2',
          title: 'Живи быстро, умри рано и оставь большой жирный труп.',
          url:
            'https://ru.seaicons.com/wp-content/uploads/2015/07/Bart-Simpson-05-Greeting-icon.png',
        },
        {
          id: '4',
          title: 'Живи быстро, умри рано и оставь большой жирный труп.',
          url:
            'https://ru.seaicons.com/wp-content/uploads/2015/07/Bart-Simpson-05-Greeting-icon.png',
        },
        {
          id: '5',
          title: 'Живи быстро, умри рано и оставь большой жирный труп.',
          url:
            'https://ru.seaicons.com/wp-content/uploads/2015/07/Bart-Simpson-05-Greeting-icon.png',
        },
        {
          id: '6',
          title: 'Живи быстро, умри рано и оставь большой жирный труп.',
          url:
            'https://ru.seaicons.com/wp-content/uploads/2015/07/Bart-Simpson-05-Greeting-icon.png',
        },
      ],
    },
    {
      list: 'cards2',
      title: 'List 2',
      cards: [
        {
          id: '10',
          title:
            'Я думал в доме, где живут одни психи — весело. Оказалось наоборот...',
          url:
            'https://avatanplus.com/files/resources/original/59d063211eae615ed6033966.png',
        },
        {
          id: '20',
          title:
            'Я думал в доме, где живут одни психи — весело. Оказалось наоборот...',
          url:
            'https://avatanplus.com/files/resources/original/59d063211eae615ed6033966.png',
        },
        {
          id: '30',
          title:
            'Я думал в доме, где живут одни психи — весело. Оказалось наоборот...',
          url:
            'https://avatanplus.com/files/resources/original/59d063211eae615ed6033966.png',
        },
        {
          id: '40',
          title:
            'Я думал в доме, где живут одни психи — весело. Оказалось наоборот...',
          url:
            'https://avatanplus.com/files/resources/original/59d063211eae615ed6033966.png',
        },
        {
          id: '50',
          title:
            'Я думал в доме, где живут одни психи — весело. Оказалось наоборот...',
          url:
            'https://avatanplus.com/files/resources/original/59d063211eae615ed6033966.png',
        },
      ],
    },
    {
      list: 'cards3',
      title: 'List 3',
      cards: [
        {
          id: '100',
          title:
            '— Эй, парень, чем занят? — Экспериментирую с задницей. — Мой маленький Эйнштейн...',
          url:
            'https://freepngimg.com/thumb/bart_simpson/8-2-bart-simpson-transparent-thumb.png',
        },
        {
          id: '200',
          title:
            '— Эй, парень, чем занят? — Экспериментирую с задницей. — Мой маленький Эйнштейн...',
          url:
            'https://freepngimg.com/thumb/bart_simpson/8-2-bart-simpson-transparent-thumb.png',
        },
        {
          id: '300',
          title:
            '— Эй, парень, чем занят? — Экспериментирую с задницей. — Мой маленький Эйнштейн...',
          url:
            'https://freepngimg.com/thumb/bart_simpson/8-2-bart-simpson-transparent-thumb.png',
        },
        {
          id: '400',
          title:
            '— Эй, парень, чем занят? — Экспериментирую с задницей. — Мой маленький Эйнштейн...',
          url:
            'https://freepngimg.com/thumb/bart_simpson/8-2-bart-simpson-transparent-thumb.png',
        },
        {
          id: '500',
          title:
            '— Эй, парень, чем занят? — Экспериментирую с задницей. — Мой маленький Эйнштейн...',
          url:
            'https://freepngimg.com/thumb/bart_simpson/8-2-bart-simpson-transparent-thumb.png',
        },
      ],
    },
    {
      list: 'cards4',
      title: 'List 4',
      cards: [
        {
          id: '1001',
          title:
            '— Точные результаты выборов сообщат через две недели. — Так долго?! — Не нравится — езжай в Россию!',
          url:
            'https://e1.pngegg.com/pngimages/991/791/png-clipart-the-simpsons-icon-bart2-bart-simpson-holding-microphone-illustration-thumbnail.png',
        },
        {
          id: '2001',
          title:
            '— Точные результаты выборов сообщат через две недели. — Так долго?! — Не нравится — езжай в Россию!',
          url:
            'https://e1.pngegg.com/pngimages/991/791/png-clipart-the-simpsons-icon-bart2-bart-simpson-holding-microphone-illustration-thumbnail.png',
        },
        {
          id: '3001',
          title:
            '— Точные результаты выборов сообщат через две недели. — Так долго?! — Не нравится — езжай в Россию!',
          url:
            'https://e1.pngegg.com/pngimages/991/791/png-clipart-the-simpsons-icon-bart2-bart-simpson-holding-microphone-illustration-thumbnail.png',
        },
        {
          id: '4001',
          title:
            '— Точные результаты выборов сообщат через две недели. — Так долго?! — Не нравится — езжай в Россию!',
          url:
            'https://e1.pngegg.com/pngimages/991/791/png-clipart-the-simpsons-icon-bart2-bart-simpson-holding-microphone-illustration-thumbnail.png',
        },
        {
          id: '5001',
          title:
            '— Точные результаты выборов сообщат через две недели. — Так долго?! — Не нравится — езжай в Россию!',
          url:
            'https://e1.pngegg.com/pngimages/991/791/png-clipart-the-simpsons-icon-bart2-bart-simpson-holding-microphone-illustration-thumbnail.png',
        },
      ],
    },
  ]);

  const removeItem = (arr, startIndex) => {
    const result = arr.splice(startIndex, 1);
    return result;
  };
  const addItem = (arr, endIdex, item) => {
    const result = arr;
    result.splice(endIdex, 0, item);
    return result;
  };

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.droppableId === result.source.droppableId) {
      const arr = cards.map((item) => {
        if (item.list === result.destination.droppableId) {
          const [removed] = removeItem(item.cards, result.source.index);
          const withAddItem = addItem(
            item.cards,
            result.destination.index,
            // eslint-disable-next-line comma-dangle
            removed
          );
          return { ...item, cards: withAddItem };
        }
        return item;
      });
      setCards(arr);
    }

    if (result.destination.droppableId !== result.source.droppableId) {
      const [sourceList] = cards.filter(
        // eslint-disable-next-line comma-dangle
        (i) => i.list === result.source.droppableId
      );
      const [removed] = removeItem(sourceList.cards, result.source.index);
      const [destList] = cards.filter(
        // eslint-disable-next-line comma-dangle
        (i) => i.list === result.destination.droppableId
      );
      const newArr = cards.map((item) => {
        if (item.list === result.destination.droppableId) {
          return {
            ...destList,
            cards: addItem(destList.cards, result.destination.index, removed),
          };
        }
        if (item.list === result.source.droppableId) {
          return sourceList;
        }
        return item;
      });
      setCards(newArr);
    }
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Content>
        <Wrapper>
          {cards.map((item) => (
            <Droppable droppableId={item.list}>
              {(provided, snapshot) => (
                <List
                  ref={provided.innerRef}
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <HeadList>{item.title}</HeadList>
                  {item.cards.map((i, index) => (
                    // eslint-disable-next-line react/jsx-no-comment-textnodes
                    <Draggable key={i.id} draggableId={i.id} index={index}>
                      {(provided, snapshot) => (
                        <Card
                          ref={provided.innerRef}
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          {...provided.draggableProps}
                          // eslint-disable-next-line react/jsx-props-no-spreading
                          {...provided.dragHandleProps}
                          isDragging={snapshot.isDragging}
                        >
                          <Picture src={i.url} />
                          {i.title}
                        </Card>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </List>
              )}
            </Droppable>
          ))}
        </Wrapper>
      </Content>
    </DragDropContext>
  );
};
export default App;

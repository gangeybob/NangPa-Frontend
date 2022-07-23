import React, { useEffect, useState } from 'react';
import SearchFilter from 'react-filter-search';
import { Container, Row, Col, FormControl, ListGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';
import './search.css';

// TODO : Change dummy
let data = [
    { id: 1, title: '계란' },
    { id: 2, title: '간장' },
    { id: 3, title: '밥' },
    { id: 4, title: '참기름' },
    { id: 5, title: '버터' },
];

const RefridgeTitle = styled.h2`
    margin-top  15px;
    margin-bottom: 19px;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.165px;
`;

function SearchIndex() {
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        // console.log(searchInput);
    }, [searchInput]);
    return (
        <Container>
            <Row className='search_wrap'>
                <Col className='min-vh-100'>
                    <RefridgeTitle>
                        요리에 사용할 재료를
                        <br />
                        선택해주세요.
                    </RefridgeTitle>
                    <FormControl
                        className='border border-0 search-input'
                        placeholder='검색어를 입력해주세요'
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <SearchFilter
                        value={searchInput}
                        data={data}
                        renderResults={(results) => (
                            <ListGroup>
                                {results.map((item) => (
                                    <ListGroup.Item className='w-100 border border-0'>
                                        {/* TODO: Convert to Commont button components  */}
                                        <Button className='bg-transparent text-dark border border-0'>{item.title}</Button>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        )}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default SearchIndex;

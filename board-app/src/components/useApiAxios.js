// useApiAxios.js
import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

export function useApiAxios() {
  // 리덕스에서 user state 가져오기
  const user = useSelector(state => state.member.value);

  // 1) useMemo로 Axios 인스턴스 생성
  const apiAxios = useMemo(() => {
    return axios.create({
      baseURL: 'http://localhost:8888',
      headers: { 'Content-Type': 'application/json' },
    });
  }, []);

  // 2) useEffect에서 인터셉터 설정
  useEffect(() => {
    const requestInterceptor = apiAxios.interceptors.request.use(
      (config) => {
        // 토큰이 있으면 헤더에 추가
        if (user.token) {
          config.headers.Authorization = `Bearer ${user.token}`;
        }
        console.log(`[Request] ${config.method.toUpperCase()} - ${config.url}`);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // 컴포넌트 언마운트 혹은 재렌더링 시 인터셉터 해제
    return () => {
      apiAxios.interceptors.request.eject(requestInterceptor);
    };
  }, [apiAxios, user.token]);

  return apiAxios;
}
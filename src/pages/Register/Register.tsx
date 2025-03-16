import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/reducers/user";
import { Navigate } from "react-router-dom";

interface RegisterSchema {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    confirmPassword?: string;
    phone: string;
    city: string;
    street: string;
    home: number;
    points: number;
}

const Register: FC = () => {
    const [userId, setUserId] = useState<number>(1);
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm<RegisterSchema>({ mode: "onBlur" });
    const dispatch = useDispatch();

    const { status } = useSelector((s) => s.user);

    const submitForm = (data: RegisterSchema) => {
        const { name, surname, email,
            phone, city, street,
            home, password
        } = data;

        const newUser: RegisterSchema = {
            id: userId, name, surname,
            email, phone, city,
            street, password, home,
            points: 500
        };

        dispatch(registerUser(newUser));
        setUserId((prev) => prev + 1);
    }

    if (status === 'success') {
        return <Navigate to='/'/>
    }

    return (
        <div className="Register">
            <div className="container">
                <div className="register__block">
                    <h1 className="register__title">Регистрация</h1>
                    <h2 className="register__desc">
                        Пройдите регистрацию <br /> чтобы заказывать мебель
                    </h2>
                    <form className="register__form" onSubmit={handleSubmit(submitForm)}>
                        <div className="register__form-box">
                            <div className="register__form-left">
                                <label htmlFor="name">Имя</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Введите ваше имя"
                                    {...register("name", { required: "Имя обязательно" })}
                                />
                                <p className="error">{errors.name?.message}</p>
                            </div>
                            <div className="register__form-right">
                                <label htmlFor="surname">Фамилия</label>
                                <input
                                    type="text"
                                    id="surname"
                                    placeholder="Введите вашу фамилию"
                                    {...register("surname", { required: "Фамилия обязательна" })}
                                />
                                <p className="error">{errors.surname?.message}</p>
                            </div>
                        </div>

                        <div className="register__form-box">
                            <div className="register__form-left">
                                <label htmlFor="email">Электронная почта</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Введите вашу эл. почту"
                                    {...register("email", {
                                        required: "Эл. почта обязательна",
                                        pattern: {
                                            value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
                                            message: "Неправильный формат email",
                                        },
                                    })}
                                />
                                <p className="error">{errors.email?.message}</p>
                            </div>
                            <div className="register__form-right">
                                <label htmlFor="phone">Номер телефона</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Введите ваш номер телефона"
                                    {...register("phone", { required: "Телефон обязателен" })}
                                />
                                <p className="error">{errors.phone?.message}</p>
                            </div>
                        </div>

                        <div className="register__form-box">
                            <div className="register__form-left">
                                <label htmlFor="password">Пароль</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Придумайте пароль"
                                    {...register("password", {
                                        required: "Пароль обязателен",
                                        pattern: {
                                            value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/,
                                            message: "Пароль должен содержать минимум 8 символов, заглавную букву, число!",
                                        },
                                    })}
                                />
                                <p className="error">{errors.password?.message}</p>
                            </div>
                            <div className="register__form-right">
                                <label htmlFor="confirm-password">Повторите пароль</label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    placeholder="Повторите пароль"
                                    {...register("confirmPassword", {
                                        required: "Подтвердите пароль",
                                        validate: (value) => value === getValues("password") || "Пароли не совпадают",
                                    })}
                                />
                                <p className="error">{errors.confirmPassword?.message}</p>
                            </div>
                        </div>

                        <button className="register__form-btn" type="submit">
                            Зарегистрироваться
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
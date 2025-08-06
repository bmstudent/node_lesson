import Student from "../model/Student_Schema.js";

// 🔹 Barcha studentlarni olish
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: 'Serverda xatolik' });
  }
};

// 🔹 Yangi student qo‘shish
export const createStudent = async (req, res) => {
  const { name, lastname, class: studentClass, phone, img } = req.body;

  try {
    const newStudent = await Student.create({
      name,
      lastname,
      class: studentClass,
      phone,
      img
    });
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 🔹 Bitta studentni olish (id orqali)
export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ error: 'Student topilmadi' });
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: 'Noto‘g‘ri ID format' });
  }
};

// 🔹 Studentni yangilash
export const updateStudent = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updated) return res.status(404).json({ error: 'Student topilmadi' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// 🔹 Studentni o‘chirish
export const deleteStudent = async (req, res) => {
  try {
    const deleted = await Student.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Student topilmadi' });
    res.json({ message: 'Student o‘chirildi' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

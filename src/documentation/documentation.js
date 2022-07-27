/**
 * @swagger
 * components:
 *    schemas:
 *       Patient:
 *          type: object
 *          required:
 *              - name
 *          properties:
 *              name:
 *                  type: String
 *                  description: The name of the patient
 *              healthInsuranceCardId:
 *                  type: Number
 *                  description: The id of the patient's health insurance card
 *              address:
 *                  type: String
 *                  description: The patient's address
 *              createdAt:
 *                  type: Date
 *                  description: the date the information was saved
 *          example:
 *              name: Ticiano Filho
 *              healthInsuranceCardId: 123456789
 *              address: Rua Luíz de Castro, 1182
 *              createdAt: 2022-07-26
 */

/**
 * @swagger
 * tags:
 *  name: Patients
 *  description: The patient managing API
 */

/**
 * @swagger
 * /patients:
 *    get:
 *      summary: Returns the list of all patients
 *      tags: [Patients]
 *      responses:
 *          200:
 *              description: The list of patients
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Patient'
 *          400:
 *              description: Bad request
 */

/**
 * @swagger
 * /patients/{id}:
 *    get:
 *      summary: Get the patient by id
 *      tags: [Patients]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: The patient id
 *      responses:
 *          200:
 *              description: The patient iformation by id
 *              contents:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Patient'
 *          500:
 *              description: Some server error.
 */

/**
 * @swagger
 * /patients/recover/{id}:
 *    get:
 *      summary: Recover the Patient
 *      tags: [Patients]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: The patient id
 *      responses:
 *          200:
 *              description: The patient iformation by id
 *              contents:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Patient'
 *          404:
 *              description: Patient not found
 *          400:
 *              description: Bad request
 */

/**
 * @swagger
 * /patients/{id}:
 *    patch:
 *      summary: Update the patient by the id
 *      tags: [Patients]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: String
 *          required: true
 *          description: The patient id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Patient'
 *      responses:
 *          200:
 *              description: The patient was updated
 *          404:
 *              description: Patient not found
 *          400:
 *              description: Bad request
 */

/**
 * @swagger
 * /patients:
 *    post:
 *      summary: Create a new patient
 *      tags: [Patients]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Patient'
 *      responses:
 *          200:
 *              description: The patient was successful created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Patient'
 *          400:
 *             description: Bad request
 *
 */

/**
 * @swagger
 * /patients/{id}:
 *    delete:
 *      summary: Remove permanently the patient by id
 *      tags: [Patients]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: String
 *          required: true
 *          description: the patient id
 *      responses:
 *          200:
 *              description: The patient was deleted permanently
 *          404:
 *              description: Patient not found
 *          400:
 *              description: Bad request
 */

/**
 * @swagger
 * /patients/file/{id}:
 *    delete:
 *      summary: Remove the patient by id
 *      tags: [Patients]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: String
 *          required: true
 *          description: the patient id
 *      responses:
 *          200:
 *              description: The patient was deleted permanently
 *          404:
 *              description: Patient not found
 *          400:
 *              description: Bad request
 */
